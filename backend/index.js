// backend/index.js
const express = require('express');
const cors = require('cors');

// Impor rute dari folder routes
const educationRoutes = require('./routes/educationRoutes');
const skillsRoutes = require('./routes/skillsRoutes');
const projectRoutes = require('./routes/projectRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Menggunakan rute yang sudah dimodularkan
app.use('/api/education', educationRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/projects', projectRoutes);

// Penanganan untuk rute yang tidak ditemukan (404)
app.use((req, res, next) => {
    res.status(404).send("Maaf, endpoint tidak ditemukan.");
});

app.listen(PORT, () => {
    console.log(`🚀 Server backend berjalan di http://localhost:${PORT}`);
});