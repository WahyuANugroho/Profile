const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

async function initializeDatabase() {
  // Check if DATABASE_URL is set
  if (!process.env.DATABASE_URL) {
    console.error('❌ DATABASE_URL environment variable is not set!');
    console.log('Please create a .env file with your Neon database connection string.');
    console.log('Example: DATABASE_URL=postgresql://username:password@host:port/database');
    process.exit(1);
  }

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  });

  try {
    console.log('🔌 Connecting to database...');
    
    // Test connection first
    await pool.query('SELECT NOW()');
    console.log('✅ Database connection successful!');
    
    // Read the SQL schema file
    const schemaPath = path.join(__dirname, 'database.sql');
    if (!fs.existsSync(schemaPath)) {
      throw new Error('database.sql file not found!');
    }
    
    const schema = fs.readFileSync(schemaPath, 'utf8');
    
    // Execute the schema
    console.log('📋 Creating database schema...');
    await pool.query(schema);
    
    console.log('✅ Database initialized successfully!');
    
    // Test the connection by fetching data
    console.log('🧪 Testing data retrieval...');
    
    const projectsCount = await pool.query('SELECT COUNT(*) FROM projects');
    const skillsCount = await pool.query('SELECT COUNT(*) FROM skills');
    const educationCount = await pool.query('SELECT COUNT(*) FROM education');
    
    console.log(`📊 Found ${projectsCount.rows[0].count} projects`);
    console.log(`📊 Found ${skillsCount.rows[0].count} skills`);
    console.log(`📊 Found ${educationCount.rows[0].count} education entries`);
    
    console.log('🎉 Database setup complete! Your API is ready to use.');
    
  } catch (error) {
    console.error('❌ Error initializing database:', error.message);
    
    if (error.code === 'ENOTFOUND') {
      console.log('💡 Tip: Check your DATABASE_URL - the host might be incorrect');
    } else if (error.code === 'ECONNREFUSED') {
      console.log('💡 Tip: Check your DATABASE_URL - connection refused');
    } else if (error.message.includes('authentication')) {
      console.log('💡 Tip: Check your username/password in DATABASE_URL');
    }
    
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