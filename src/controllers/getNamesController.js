
const getNamesService = require('../services/getNamesService.js');

// controller handles getting names request
exports.getNames = async (req, res) => {
    const { url } = req.query;  // Get the URL from query parameter

    if (!url) {
        return res.status(400).json({ message: 'URL is required' });
    }

    try {
        
    } catch (error) {
        console.error('Error in controller:', error);
        res.status(500).json({ message: 'Error scraping the page', error: error.message})
    }
};