// backend/routes/educationRoutes.js
const express = require('express');
const router = express.Router();
const { educationHistory } = require('../data');

// GET /api/education
router.get('/', (req, res) => {
    res.json(educationHistory);
});

module.exports = router;