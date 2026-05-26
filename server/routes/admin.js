const express = require('express');
const db = require('../db');
const { requireAdmin } = require('../middleware/auth');

const router = express.Router();

// GET /api/admin/users
router.get('/users', requireAdmin, (req, res) => {
  const users = db.prepare(
    'SELECT id, name, email, role, created_at FROM users ORDER BY name'
  ).all();
  res.json(users);
});

// PATCH /api/admin/users/:id — update role
router.patch('/users/:id', requireAdmin, (req, res) => {
  const { role } = req.body;
  if (!['user', 'admin'].includes(role)) {
    return res.status(400).json({ error: 'Role must be user or admin' });
  }
  db.prepare('UPDATE users SET role = ? WHERE id = ?').run(role, req.params.id);
  res.json({ success: true });
});

// DELETE /api/admin/users/:id
router.delete('/users/:id', requireAdmin, (req, res) => {
  if (parseInt(req.params.id) === req.user.id) {
    return res.status(400).json({ error: 'Cannot delete yourself' });
  }
  db.prepare('DELETE FROM step_entries WHERE user_id = ?').run(req.params.id);
  db.prepare('DELETE FROM users WHERE id = ?').run(req.params.id);
  res.json({ success: true });
});

// GET /api/admin/export — CSV export of all step data
router.get('/export', requireAdmin, (req, res) => {
  const rows = db.prepare(`
    SELECT u.name, u.email, s.date, s.steps
    FROM step_entries s
    JOIN users u ON u.id = s.user_id
    ORDER BY u.name, s.date
  `).all();

  let csv = 'Name,Email,Date,Steps\n';
  csv += rows.map(r => `"${r.name}","${r.email}","${r.date}",${r.steps}`).join('\n');

  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename="steps-export.csv"');
  res.send(csv);
});

module.exports = router;
