const { Pool } = require('pg');
require('dotenv').config();

async function testConnection() {
  console.log('🔍 Testing database connection...');
  
  // Check if DATABASE_URL is set
  if (!process.env.DATABASE_URL) {
    console.error('❌ DATABASE_URL is not set!');
    console.log('Please create a .env file with your Neon connection string.');
    return;
  }
  
  console.log('✅ DATABASE_URL is set');
  console.log('🔗 Connection string:', process.env.DATABASE_URL.substring(0, 50) + '...');
  
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  });

  try {
    console.log('🔌 Attempting to connect...');
    const result = await pool.query('SELECT NOW() as current_time');
    console.log('✅ Connection successful!');
    console.log('🕐 Current time from database:', result.rows[0].current_time);
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    
    if (error.code === 'ENOTFOUND') {
      console.log('💡 Tip: Check your host name in DATABASE_URL');
    } else if (error.code === 'ECONNREFUSED') {
      console.log('💡 Tip: Check your port number in DATABASE_URL');
    } else if (error.message.includes('authentication')) {
      console.log('💡 Tip: Check your username/password in DATABASE_URL');
    } else if (error.message.includes('database')) {
      console.log('💡 Tip: Check your database name in DATABASE_URL');
    }
  } finally {
    await pool.end();
  }
}

testConnection(); 