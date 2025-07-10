// backend/routes/projectRoutes.js
const express = require('express');
const router = express.Router();
const { projects } = require('../data');

// GET /api/projects
router.get('/', (req, res) => {
    res.json(projects);
});

module.exports = router;