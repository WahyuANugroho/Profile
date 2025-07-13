require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { neon } = require('@neondatabase/serverless');

const app = express();
const sql = neon(process.env.DATABASE_URL_CUSTOM || process.env.DATABASE_URL);

app.use(cors());
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'Backend API is running!' });
});

// Get all education
app.get('/api/education', async (req, res) => {
  try {
    const result = await sql`SELECT id, period, institution, major FROM education ORDER BY id ASC`;
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all skills
app.get('/api/skills', async (req, res) => {
  try {
    const result = await sql`SELECT id, name, level FROM skills ORDER BY id ASC`;
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all projects
app.get('/api/projects', async (req, res) => {
  try {
    const result = await sql`SELECT id, title, image, description, tech, link FROM projects ORDER BY id ASC`;
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Export the app for Vercel
module.exports = app; 