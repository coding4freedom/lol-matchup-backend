
const express = require('express');

// Create an Express app instance
const app = express();

// Set up Basic route for testing server
app.get('/', (req, res) => {
    res.send('Hello The server is Up!');
});

// set the port
const PORT = process.env.PORT || 3000;

// start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});