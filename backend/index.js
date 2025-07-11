// index.js
const express = require('express');
const cors = require('cors');

// Langsung impor semua data yang dibutuhkan di sini
const { educationHistory, skills, projects } = require('./data');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// --- SEMUA ROUTES DIGABUNG DI SINI ---

// GET /api/education
app.get('/api/education', (req, res) => {
    res.json(educationHistory);
});

// GET /api/skills
app.get('/api/skills', (req, res) => {
    res.json(skills);
});

// GET /api/projects
app.get('/api/projects', (req, res) => {
    res.json(projects);
});

// --- Akhir dari Routes ---

app.listen(PORT, () => {
    console.log(`🚀 Server tunggal (routes digabung) berjalan di http://localhost:${PORT}`);
});