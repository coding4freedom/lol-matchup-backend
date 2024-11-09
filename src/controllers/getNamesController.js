
const getNamesService = require('../services/getNamesService.js');

// controller handles getting names request
exports.getNames = async (req, res) => {
    
    try {
        const namesText = await getNamesService.getNames();
        res.json(namesText);
    } catch (error) {
        console.error('Error in controller:', error);
        res.status(500).json({ message: 'Error scraping the page', error: error.message})
    }
};