const express = require('express');
const db = require('../db');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

// GET /api/steps — get current user's step entries
router.get('/', requireAuth, (req, res) => {
  const entries = db.prepare(
    'SELECT * FROM step_entries WHERE user_id = ? ORDER BY date DESC LIMIT 90'
  ).all(req.user.id);
  res.json(entries);
});

// POST /api/steps — log steps for a date
router.post('/', requireAuth, (req, res) => {
  const { date, steps } = req.body;

  if (!date || steps === undefined) {
    return res.status(400).json({ error: 'Date and steps are required' });
  }
  if (!Number.isInteger(steps) || steps < 0 || steps > 100000) {
    return res.status(400).json({ error: 'Steps must be a number between 0 and 100,000' });
  }

  // Upsert — update if entry for that date already exists
  const existing = db.prepare(
    'SELECT id FROM step_entries WHERE user_id = ? AND date = ?'
  ).get(req.user.id, date);

  if (existing) {
    db.prepare('UPDATE step_entries SET steps = ? WHERE id = ?').run(steps, existing.id);
    const updated = db.prepare('SELECT * FROM step_entries WHERE id = ?').get(existing.id);
    return res.json(updated);
  }

  const result = db.prepare(
    'INSERT INTO step_entries (user_id, date, steps) VALUES (?, ?, ?)'
  ).run(req.user.id, date, steps);

  const entry = db.prepare('SELECT * FROM step_entries WHERE id = ?').get(result.lastInsertRowid);
  res.status(201).json(entry);
});

// DELETE /api/steps/:id — delete a step entry
router.delete('/:id', requireAuth, (req, res) => {
  const entry = db.prepare('SELECT * FROM step_entries WHERE id = ?').get(req.params.id);
  if (!entry) return res.status(404).json({ error: 'Entry not found' });
  if (entry.user_id !== req.user.id) return res.status(403).json({ error: 'Not your entry' });

  db.prepare('DELETE FROM step_entries WHERE id = ?').run(req.params.id);
  res.json({ success: true });
});

module.exports = router;
