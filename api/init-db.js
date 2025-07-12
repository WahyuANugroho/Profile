const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

async function initializeDatabase() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  });

  try {
    console.log('Connecting to database...');
    
    // Read the SQL schema file
    const schemaPath = path.join(__dirname, 'database.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');
    
    // Execute the schema
    console.log('Creating database schema...');
    await pool.query(schema);
    
    console.log('Database initialized successfully!');
    
    // Test the connection by fetching projects
    const result = await pool.query('SELECT COUNT(*) FROM projects');
    console.log(`Found ${result.rows[0].count} projects in the database`);
    
  } catch (error) {
    console.error('Error initializing database:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

// Run the initialization if this file is executed directly
if (require.main === module) {
  initializeDatabase();
}

module.exports = { initializeDatabase }; 