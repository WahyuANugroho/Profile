// backend/seed.js
const path = require('path');
// Pastikan file .env.development.local ada setelah menjalankan 'vercel env pull'
require('dotenv').config({ path: path.resolve(__dirname, '../.env.development.local') });

const { sql } = require('@vercel/postgres');
const { educationHistory, skills, projects } = require('./data.js');

async function seed() {
    try {
        await sql`CREATE TABLE IF NOT EXISTS education (id SERIAL PRIMARY KEY, institution VARCHAR(255), major VARCHAR(255), period VARCHAR(255));`;
        await sql`CREATE TABLE IF NOT EXISTS skills (id SERIAL PRIMARY KEY, name VARCHAR(255), level VARCHAR(255));`;
        await sql`CREATE TABLE IF NOT EXISTS projects (id SERIAL PRIMARY KEY, title VARCHAR(255), image VARCHAR(255), description TEXT, tech VARCHAR(255)[], link VARCHAR(255));`;
        console.log('Tabel berhasil dibuat.');

        // Menggunakan Promise.all untuk menjalankan semua query secara paralel
        await Promise.all(educationHistory.map(e => sql`INSERT INTO education (institution, major, period) VALUES (${e.institution}, ${e.major}, ${e.period});`));
        await Promise.all(skills.map(s => sql`INSERT INTO skills (name, level) VALUES (${s.name}, ${s.level});`));
        await Promise.all(projects.map(p => sql`INSERT INTO projects (title, image, description, tech, link) VALUES (${p.title}, ${p.image}, ${p.description}, ${p.tech}, ${p.link});`));
        
        console.log('Proses seeding data berhasil!');
    } catch (error) {
        console.error('Error seeding:', error);
        process.exit(1);
    }
}

seed();