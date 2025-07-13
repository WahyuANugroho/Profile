import { neon } from '@neondatabase/serverless';

const sql = neon(import.meta.env.VITE_NEON_DATABASE_URL || 'your_neon_database_url_here');

export async function initializeDatabase() {
  try {
    console.log('Initializing database...');

    // Create education_history table
    await sql`
      CREATE TABLE IF NOT EXISTS education_history (
        id SERIAL PRIMARY KEY,
        institution VARCHAR(255) NOT NULL,
        major VARCHAR(255) NOT NULL,
        start_year INTEGER NOT NULL,
        end_year INTEGER,
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Create skills table
    await sql`
      CREATE TABLE IF NOT EXISTS skills (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        proficiency_level VARCHAR(50) NOT NULL,
        category VARCHAR(100),
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Create projects table
    await sql`
      CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        image_url VARCHAR(500),
        github_url VARCHAR(500),
        live_url VARCHAR(500),
        technologies TEXT[],
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Insert sample data for education_history
    await sql`
      INSERT INTO education_history (institution, major, start_year, end_year, description)
      VALUES 
        ('Universitas Amikom Yogyakarta', 'S1 - Informatika', 2022, NULL, 'Currently pursuing Bachelor degree in Informatics'),
        ('SMK Negeri 2 Metro', 'Agribisnis Ternak Unggas', 2019, 2022, 'Vocational high school in Animal Husbandry')
      ON CONFLICT DO NOTHING
    `;

    // Insert sample data for skills
    await sql`
      INSERT INTO skills (name, proficiency_level, category, description)
      VALUES 
        ('Vue.js', 'Mahir', 'Frontend', 'Advanced Vue.js development with Composition API'),
        ('JavaScript', 'Mahir', 'Programming', 'ES6+ JavaScript with modern features'),
        ('Tailwind CSS', 'Mahir', 'Frontend', 'Utility-first CSS framework'),
        ('Node.js', 'Menengah', 'Backend', 'Server-side JavaScript development'),
        ('Express.js', 'Menengah', 'Backend', 'Web application framework for Node.js'),
        ('PostgreSQL', 'Menengah', 'Database', 'Relational database management system')
      ON CONFLICT DO NOTHING
    `;

    // Insert sample data for projects
    await sql`
      INSERT INTO projects (title, description, image_url, github_url, live_url, technologies)
      VALUES 
        (
          'Lucien Avenue',
          'Platform yang menjual sepatu branded dengan fitur keranjang belanja, dibangun untuk skalabilitas dan performa tinggi.',
          'project1.png',
          'https://github.com/GITikhsan/LUCIEN-AVENUE-FRONTEND',
          NULL,
          ARRAY['Vue.js', 'Laravel', 'PostgreSQL']
        ),
        (
          'Elysia Assistant',
          'Chatbot asisten yang terintegrasi dengan model AI secara lokal.',
          'project2.png',
          'https://github.com/WahyuANugroho/Elysia_Assistant',
          NULL,
          ARRAY['Kotlin', 'Llama', 'ONNX']
        )
      ON CONFLICT DO NOTHING
    `;

    console.log('Database initialized successfully!');
    return { success: true, message: 'Database initialized successfully!' };

  } catch (error) {
    console.error('Error initializing database:', error);
    return { success: false, error: error.message };
  }
}

// Function to check if tables exist
export async function checkDatabaseTables() {
  try {
    const tables = await sql`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name IN ('education_history', 'skills', 'projects')
    `;
    
    return {
      success: true,
      tables: tables.map(row => row.table_name),
      exists: tables.length === 3
    };
  } catch (error) {
    console.error('Error checking database tables:', error);
    return { success: false, error: error.message };
  }
}

// Function to reset database (drop all tables)
export async function resetDatabase() {
  try {
    console.log('Resetting database...');
    
    await sql`DROP TABLE IF EXISTS projects CASCADE`;
    await sql`DROP TABLE IF EXISTS skills CASCADE`;
    await sql`DROP TABLE IF EXISTS education_history CASCADE`;
    
    console.log('Database reset successfully!');
    return { success: true, message: 'Database reset successfully!' };
  } catch (error) {
    console.error('Error resetting database:', error);
    return { success: false, error: error.message };
  }
} 