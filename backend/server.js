const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = 3000;
const mongoUri = process.env.MONGO_URI_DEV

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect(mongoUri, {
    
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define a simple route
app.get('/', (req, res) => {
    res.send('Welcome to Eventory! Admin!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
