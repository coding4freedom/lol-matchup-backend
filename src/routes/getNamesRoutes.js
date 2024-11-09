
const express = require('express');
const router = express.Router();
const getNamesController = require('../controllers/getNamesController.js');

// GET route for scraping of name
router.get('/api-names', getNamesController.getNames);

module.exports = router;

