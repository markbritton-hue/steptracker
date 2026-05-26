const express = require('express');
const db = require('../db');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

// GET /api/leaderboard?period=week|month|all
router.get('/', requireAuth, (req, res) => {
  const { period = 'month' } = req.query;

  let dateFilter = '';
  if (period === 'week') {
    dateFilter = "AND s.date >= date('now', '-7 days')";
  } else if (period === 'month') {
    dateFilter = "AND s.date >= date('now', 'start of month')";
  }
  // 'all' has no filter

  const rows = db.prepare(`
    SELECT
      u.id,
      u.name,
      COALESCE(SUM(s.steps), 0) AS total_steps,
      COUNT(s.id) AS days_logged
    FROM users u
    LEFT JOIN step_entries s ON s.user_id = u.id ${dateFilter}
    GROUP BY u.id
    ORDER BY total_steps DESC
  `).all();

  // Add rank
  const ranked = rows.map((row, i) => ({ rank: i + 1, ...row }));
  res.json(ranked);
});

// GET /api/leaderboard/stats — quick summary for the logged-in user
router.get('/stats', requireAuth, (req, res) => {
  const userId = req.user.id;

  const todaySteps = db.prepare(
    "SELECT steps FROM step_entries WHERE user_id = ? AND date = date('now')"
  ).get(userId);

  const weekSteps = db.prepare(
    "SELECT COALESCE(SUM(steps), 0) AS total FROM step_entries WHERE user_id = ? AND date >= date('now', '-7 days')"
  ).get(userId);

  const monthSteps = db.prepare(
    "SELECT COALESCE(SUM(steps), 0) AS total FROM step_entries WHERE user_id = ? AND date >= date('now', 'start of month')"
  ).get(userId);

  const rank = db.prepare(`
    SELECT COUNT(*) + 1 AS rank FROM (
      SELECT user_id, SUM(steps) AS total
      FROM step_entries
      WHERE date >= date('now', 'start of month')
      GROUP BY user_id
      HAVING total > (
        SELECT COALESCE(SUM(steps), 0) FROM step_entries
        WHERE user_id = ? AND date >= date('now', 'start of month')
      )
    )
  `).get(userId);

  res.json({
    today: todaySteps?.steps ?? 0,
    week: weekSteps.total,
    month: monthSteps.total,
    rank: rank.rank,
  });
});

module.exports = router;
