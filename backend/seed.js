// backend/seed.js

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env.development.local') });

// =================================================================
// >> TAMBAHKAN KODE DEBUG INI UNTUK MELIHAT ISI VARIABEL <<
console.log('--- Tes Diagnostik ---');
console.log('Mencoba membaca POSTGRES_URL:', process.env.POSTGRES_URL);
console.log('----------------------');
// =================================================================

const { sql } = require('@vercel/postgres');
const { educationHistory, skills, projects } = require('./data.js');

async function seed() {
    try {
        console.log('Memulai proses seeding...');

        // Cek koneksi sebelum membuat tabel
        if (!process.env.POSTGRES_URL) {
            throw new Error("Koneksi string POSTGRES_URL tidak ditemukan!");
        }

        await sql`CREATE TABLE IF NOT EXISTS education (id SERIAL PRIMARY KEY, institution VARCHAR(255), major VARCHAR(255), period VARCHAR(255));`;
        await sql`CREATE TABLE IF NOT EXISTS skills (id SERIAL PRIMARY KEY, name VARCHAR(255), level VARCHAR(255));`;
        await sql`CREATE TABLE IF NOT EXISTS projects (id SERIAL PRIMARY KEY, title VARCHAR(255), image VARCHAR(255), description TEXT, tech VARCHAR(255)[], link VARCHAR(255));`;
        console.log('Tabel berhasil dibuat atau sudah ada.');

        await sql`DELETE FROM education;`;
        await sql`DELETE FROM skills;`;
        await sql`DELETE FROM projects;`;
        console.log('Data lama berhasil dihapus.');

        await Promise.all(
            educationHistory.map(e => sql`INSERT INTO education (institution, major, period) VALUES (${e.institution}, ${e.major}, ${e.period});`)
        );
        await Promise.all(
            skills.map(s => sql`INSERT INTO skills (name, level) VALUES (${s.name}, ${s.level});`)
        );
        await Promise.all(
            projects.map(p => sql`INSERT INTO projects (title, image, description, tech, link) VALUES (${p.title}, ${p.image}, ${p.description}, ${p.tech}, ${p.link});`)
        );
        
        console.log('🎉 Proses seeding data berhasil!');

    } catch (error) {
        console.error('Error seeding:', error);
        process.exit(1);
    }
}

seed();