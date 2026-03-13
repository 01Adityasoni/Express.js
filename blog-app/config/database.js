// import mongoose
const mongoose = require('mongoose');

// IMPORT .ENV FILE
require('dotenv').config();

const connectWithDb = () => {
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => console.log('Connected to MongoDB successfully'))
        .catch((err) => {
            console.log('Error connecting to MongoDB : ' + err);
            process.exit(1); // exit the process with failure code
        });
}; 

module.exports = connectWithDb ; 