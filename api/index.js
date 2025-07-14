const { neon } = require('@neondatabase/serverless');

const sql = neon(process.env.DATABASE_URL);

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Health check
  if (req.url === '/' && req.method === 'GET') {
    res.status(200).json({ status: 'Backend API is running!' });
    return;
  }

  // Get all education
  if (req.url === '/education' && req.method === 'GET') {
    try {
      const result = await sql`SELECT id, period, institution, major FROM education ORDER BY id ASC`;
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
    return;
  }

  // Get all skills
  if (req.url === '/skills' && req.method === 'GET') {
    try {
      const result = await sql`SELECT id, name, level FROM skills ORDER BY id ASC`;
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
    return;
  }

  // Get all projects
  if (req.url === '/projects' && req.method === 'GET') {
    try {
      const result = await sql`SELECT id, title, image, description, tech, link FROM projects ORDER BY id ASC`;
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
    return;
  }

  // Not found
  res.status(404).json({ error: 'Not found', path: req.url });
}; 