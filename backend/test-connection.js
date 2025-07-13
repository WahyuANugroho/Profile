require('dotenv').config();
const { neon } = require('@neondatabase/serverless');

const sql = neon(process.env.DATABASE_URL);

async function testConnection() {
  try {
    console.log('Testing Neon database connection...');
    const result = await sql`SELECT NOW() as current_time`;
    console.log('✅ Database connected successfully!');
    console.log('Current time from database:', result[0].current_time);
    
    // Test if tables exist
    console.log('\nChecking if tables exist...');
    const tables = await sql`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name IN ('education_history', 'skills', 'projects')
    `;
    
    console.log('Found tables:', tables.map(row => row.table_name));
    
    if (tables.length === 0) {
      console.log('⚠️  No tables found. You may need to initialize the database.');
    } else {
      console.log('✅ Tables found!');
    }
    
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
  }
}

testConnection(); 