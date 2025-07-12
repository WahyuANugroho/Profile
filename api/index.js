const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend is running' });
});

// Temporary database initialization endpoint (remove after first use)
app.post('/api/init-db', async (req, res) => {
  try {
    const fs = require('fs');
    const path = require('path');
    
    // Read the SQL schema file
    const schemaPath = path.join(__dirname, 'database.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');
    
    // Execute the schema
    await pool.query(schema);
    
    res.json({ message: 'Database initialized successfully!' });
  } catch (error) {
    console.error('Error initializing database:', error);
    res.status(500).json({ error: 'Failed to initialize database' });
  }
});

// Get all projects
app.get('/api/projects', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM projects ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get project by ID
app.get('/api/projects/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM projects WHERE id = $1', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Project not found' });
    }
    
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create new project
app.post('/api/projects', async (req, res) => {
  try {
    const { title, description, technologies, image_url, github_url, live_url } = req.body;
    
    const result = await pool.query(
      'INSERT INTO projects (title, description, technologies, image_url, github_url, live_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [title, description, technologies, image_url, github_url, live_url]
    );
    
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update project
app.put('/api/projects/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, technologies, image_url, github_url, live_url } = req.body;
    
    const result = await pool.query(
      'UPDATE projects SET title = $1, description = $2, technologies = $3, image_url = $4, github_url = $5, live_url = $6, updated_at = NOW() WHERE id = $7 RETURNING *',
      [title, description, technologies, image_url, github_url, live_url, id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Project not found' });
    }
    
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating project:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete project
app.delete('/api/projects/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM projects WHERE id = $1 RETURNING *', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Project not found' });
    }
    
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all skills
app.get('/api/skills', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM skills ORDER BY category, name');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching skills:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create new skill
app.post('/api/skills', async (req, res) => {
  try {
    const { name, category, proficiency } = req.body;
    
    const result = await pool.query(
      'INSERT INTO skills (name, category, proficiency) VALUES ($1, $2, $3) RETURNING *',
      [name, category, proficiency]
    );
    
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating skill:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get education history
app.get('/api/education', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM education ORDER BY period DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching education:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create education entry
app.post('/api/education', async (req, res) => {
  try {
    const { period, institution, major } = req.body;
    
    const result = await pool.query(
      'INSERT INTO education (period, institution, major) VALUES ($1, $2, $3) RETURNING *',
      [period, institution, major]
    );
    
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating education entry:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    const result = await pool.query(
      'INSERT INTO contact_messages (name, email, message) VALUES ($1, $2, $3) RETURNING *',
      [name, email, message]
    );
    
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app; 