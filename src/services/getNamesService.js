
const { chromium} = require('playwright');
const fs = require('fs');
const path = require('path');

// create the path location for the champ json list
const champListFilePath = path.join(__dirname, '../..', 'public', 'champList.json');

// Service function to get names from site
exports.getNames = async () => {
    let browser;
    
    try {
        browser = await chromium.launch();
        const page = await browser.newPage();
        await page.goto('https://universe.leagueoflegends.com/en_US/champions/');
        
        // wait for the div h1 names to load
        const divs = page.locator('div.copy_xxN7');
        const divCount = await divs.count();

        if (divCount === 0) {
            throw new Error('No divs with that name');
        }

        // get text from all targetedNames h1
        const namesText = [];

        for (let i = 0; i < divCount; i++) {
            const div = divs.nth(i)
            await div.waitFor({ state: 'visible', timeout: 5000 }); 
            
            const h1Names = await div.locator('h1').all();

            // get names from h1
            for ( const names of h1Names) {
                const name = await names.textContent();
                if (name) {
                    namesText.push(name.trim());
                }
            }
        }

        console.log('Champs found: ', namesText);

        try {
            // save the champList.json
            if (namesText) { 
                fs.writeFileSync(champListFilePath, JSON.stringify(namesText, null, 2));
                console.log('Champs list saved to json file!')
            }
            
        } catch (error) {
            console.error('Error while trying to write to file: ', error);
            throw new Error('Error duing writing to file');
        }
        

        return namesText;

    } catch (error) {
        console.error('Error during scraping:', error);
        throw new Error('Error scraping the page');
    } finally {
        if (browser) {
            await browser.close();
        }
    }
}