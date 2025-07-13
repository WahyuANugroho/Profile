require('dotenv').config();
const { neon } = require('@neondatabase/serverless');

const sql = neon(process.env.DATABASE_URL);

async function initializeDatabase() {
  try {
    console.log('Initializing database...');

    // Drop tables if they exist (for a clean import)
    await sql`DROP TABLE IF EXISTS projects CASCADE`;
    await sql`DROP TABLE IF EXISTS skills CASCADE`;
    await sql`DROP TABLE IF EXISTS education CASCADE`;

    // Create education table
    await sql`
      CREATE TABLE IF NOT EXISTS education (
        id SERIAL PRIMARY KEY,
        period VARCHAR(50) NOT NULL,
        institution VARCHAR(255) NOT NULL,
        major VARCHAR(255) NOT NULL
      )
    `;

    // Create skills table
    await sql`
      CREATE TABLE IF NOT EXISTS skills (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        level VARCHAR(50) NOT NULL
      )
    `;

    // Create projects table
    await sql`
      CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        image VARCHAR(255),
        description TEXT NOT NULL,
        tech TEXT[],
        link VARCHAR(500)
      )
    `;

    // Insert data for education
    await sql`
      INSERT INTO education (id, period, institution, major) VALUES
        (1, '2022 - Sekarang', 'Universitas Amikom Yogyakarta', 'S1 - Informatika'),
        (2, '2019 - 2022', 'SMK Negeri 2 Metro', 'Agribisnis Ternak Unggas')
    `;

    // Insert data for skills
    await sql`
      INSERT INTO skills (name, level) VALUES
        ('Vue.js', 'Mahir'),
        ('JavaScript', 'Mahir'),
        ('Tailwind CSS', 'Mahir'),
        ('Node.js', 'Menengah'),
        ('Express.js', 'Menengah'),
        ('PostgreSQL', 'Menengah')
    `;

    // Insert data for projects
    await sql`
      INSERT INTO projects (title, image, description, tech, link) VALUES
        (
          'Lucien Avenue',
          'project1.png',
          'Platform yang menjual sepatu branded dengan fitur keranjang belanja, dibangun untuk skalabilitas dan performa tinggi.',
          ARRAY['Vue.js', 'Laravel', 'PostgreSQL'],
          'https://github.com/GITikhsan/LUCIEN-AVENUE-FRONTEND'
        ),
        (
          'Elysia Assistant',
          'project2.png',
          'Chatbot asisten yang terintegrasi dengan model AI secara lokal.',
          ARRAY['Kotlin', 'Llama', 'ONNX'],
          'https://github.com/WahyuANugroho/Elysia_Assistant'
        )
    `;

    console.log('✅ Database initialized and imported exactly as in data.js!');
    return { success: true, message: 'Database initialized and imported exactly as in data.js!' };

  } catch (error) {
    console.error('❌ Error initializing database:', error);
    return { success: false, error: error.message };
  }
}

initializeDatabase(); 