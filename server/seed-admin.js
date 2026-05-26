// Run once to create the admin user:
// node seed-admin.js

const bcrypt = require('bcryptjs');
const db = require('./db');

const email = 'admin';
const password = 'pivotal123';
const name = 'Admin';

const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(email);
if (existing) {
  // Update password and role if already exists
  const hash = bcrypt.hashSync(password, 10);
  db.prepare('UPDATE users SET password_hash = ?, role = ? WHERE email = ?').run(hash, 'admin', email);
  console.log('Admin user updated.');
} else {
  const hash = bcrypt.hashSync(password, 10);
  db.prepare('INSERT INTO users (name, email, password_hash, role) VALUES (?, ?, ?, ?)').run(name, email, hash, 'admin');
  console.log('Admin user created.');
}

console.log('Login with:  username: admin  /  password: pivotal123');
