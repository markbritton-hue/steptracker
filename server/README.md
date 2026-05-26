# 🏃 StepTracker — Company Step Competition

A simple web app for tracking and competing on daily step counts across your company.

## Features
- Employee login / registration
- Daily step logging (one entry per day, editable)
- Live leaderboard — this week, this month, all time
- Personal dashboard with stats and rank
- Admin panel — manage users, export CSV

## Stack
- **Backend**: Node.js + Express + SQLite (better-sqlite3)
- **Frontend**: React + Vite + Tailwind CSS
- **Auth**: JWT tokens

---

## Setup

### 1. Install dependencies

```bash
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

### 2. Configure environment

```bash
cd server
copy .env.example .env
# Edit .env and set a strong JWT_SECRET
```

### 3. Run in development

```bash
# Terminal 1 — backend (port 3001)
cd server
npm run dev

# Terminal 2 — frontend (port 5173)
cd client
npm run dev
```

Open http://localhost:5173

### 4. Build for production

```bash
cd client
npm run build
# This creates client/dist/

cd ../server
set NODE_ENV=production
node index.js
# App served at http://localhost:3001
```

---

## First-Time Admin Setup

1. Register an account normally
2. Open the SQLite database and promote yourself to admin:

```bash
# Using sqlite3 CLI or DB Browser for SQLite
UPDATE users SET role = 'admin' WHERE email = 'your@email.com';
```

3. Log back in — you'll see the Admin link in the navbar

---

## Database

SQLite file is created automatically at `server/steptracker.db` on first run.
Back it up by copying that file.
