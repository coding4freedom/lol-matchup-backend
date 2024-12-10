
const express = require('express');
const cors = require('cors');

// Create an Express app instance
const app = express();
const getNamesRoutes = require('./routes/getNamesRoutes.js');

// Configure CORS to allow frontend app to interface with this project
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET'],    
}

// Set up Basic route for testing server
app.get('/', (req, res) => {
    res.send('Hello The server is Up!');
});

// Use cors middleware globally
app.use(cors(corsOptions));

app.use(getNamesRoutes);

// set the port
const PORT = process.env.PORT || 3000;

// start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});