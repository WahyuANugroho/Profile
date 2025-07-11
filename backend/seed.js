// File: backend/seed.js

const path = require('path');
// Perbaikan: __dirname menggunakan dua garis bawah
// Ini memastikan Node.js tahu di mana harus mencari file .env
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env.development.local') });

const { sql } = require('@vercel/postgres');
const { educationHistory, skills, projects } = require('./data.js');

async function seed() {
    console.log('Memulai proses seeding...');
    try {
        // Membuat tabel jika belum ada
        await sql`CREATE TABLE IF NOT EXISTS education (id SERIAL PRIMARY KEY, institution VARCHAR(255), major VARCHAR(255), period VARCHAR(255));`;
        await sql`CREATE TABLE IF NOT EXISTS skills (id SERIAL PRIMARY KEY, name VARCHAR(255), level VARCHAR(255));`;
        await sql`CREATE TABLE IF NOT EXISTS projects (id SERIAL PRIMARY KEY, title VARCHAR(255), image VARCHAR(255), description TEXT, tech VARCHAR(255)[], link VARCHAR(255));`;
        console.log('Tabel berhasil dibuat atau sudah ada.');

        // Mengosongkan tabel sebelum mengisi data baru untuk menghindari duplikat
        await sql`DELETE FROM education;`;
        await sql`DELETE FROM skills;`;
        await sql`DELETE FROM projects;`;
        console.log('Data lama berhasil dihapus.');

        // Mengisi data pendidikan
        await Promise.all(educationHistory.map(e => sql`INSERT INTO education (institution, major, period) VALUES (${e.institution}, ${e.major}, ${e.period});`));
        console.log('Data pendidikan berhasil ditambahkan.');

        // Mengisi data skills
        await Promise.all(skills.map(s => sql`INSERT INTO skills (name, level) VALUES (${s.name}, ${s.level});`));
        console.log('Data skills berhasil ditambahkan.');

        // Mengisi data projects
        await Promise.all(projects.map(p => sql`INSERT INTO projects (title, image, description, tech, link) VALUES (${p.title}, ${p.image}, ${p.description}, ${p.tech}, ${p.link});`));
        console.log('Data proyek berhasil ditambahkan.');

        console.log('✅ Proses seeding data berhasil!');
    } catch (error) {
        console.error('❌ Error seeding:', error);
        process.exit(1);
    }
}

seed();