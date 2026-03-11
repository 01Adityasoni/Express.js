// import mongoose
const mongoose = require('mongoose');

// import dotenv to use .env file
require('dotenv').config();


// function to connect to the database
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
    // mongoose.connect('mongodb://localhost:27017/blogappData')
}

module.exports = dbConnect;