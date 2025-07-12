require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sql } = require('@vercel/postgres');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint untuk Edukasi
app.get('/api/education', async (req, res) => {
    try {
        const { rows } = await sql`SELECT * FROM education ORDER BY id DESC;`;
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Gagal mengambil data pendidikan' });
    }
});

// Endpoint untuk Keahlian
app.get('/api/skills', async (req, res) => {
    try {
        const { rows } = await sql`SELECT * FROM skills;`;
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Gagal mengambil data skill' });
    }
});

// Endpoint untuk Proyek
app.get('/api/projects', async (req, res) => {
    try {
        const { rows } = await sql`SELECT * FROM projects;`;
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Gagal mengambil data proyek' });
    }
});

// WAJIB ADA: Ekspor 'app' agar Vercel bisa menggunakannya
module.exports = app;