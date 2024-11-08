
const playwright = require('playwright');

// Service function to get names from site
exports.getNames = async (url) => {
    if (!url) {
        throw new Error('Url is needed');
    }

    try {
        
    } catch (error) {
        console.error('Error during scraping:', error);
        throw new Error('Error scraping the page');
    }
}