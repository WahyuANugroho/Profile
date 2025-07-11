// backend-monolitik/seed.js
require('dotenv').config();
const { sql } = require('@vercel/postgres');
const { educationHistory, skills, projects } = require('./data.js');

async function seed() {
    try {
        console.log('Membuat tabel...');
        await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        await sql`
            CREATE TABLE IF NOT EXISTS education (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                institution VARCHAR(255) NOT NULL,
                major VARCHAR(255) NOT NULL,
                period VARCHAR(255) NOT NULL
            );
        `;
        await sql`
            CREATE TABLE IF NOT EXISTS skills (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                level VARCHAR(255) NOT NULL
            );
        `;
        await sql`
            CREATE TABLE IF NOT EXISTS projects (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                image VARCHAR(255),
                description TEXT,
                tech VARCHAR(255)[],
                link VARCHAR(255)
            );
        `;
        console.log('Tabel berhasil dibuat.');

        console.log('Memasukkan data awal (seeding)...');
        await Promise.all(educationHistory.map(e => sql`INSERT INTO education (institution, major, period) VALUES (${e.institution}, ${e.major}, ${e.period});`));
        await Promise.all(skills.map(s => sql`INSERT INTO skills (name, level) VALUES (${s.name}, ${s.level});`));
        await Promise.all(projects.map(p => sql`INSERT INTO projects (title, image, description, tech, link) VALUES (${p.title}, ${p.image}, ${p.description}, ${p.tech}, ${p.link});`));
        
        console.log('Proses seeding data berhasil!');
    } catch (error) {
        console.error('Error saat seeding:', error);
        process.exit(1);
    }
}

seed();