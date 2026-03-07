const mongoose = require('mongoose');

require('dotenv').config(); // to use .env file

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    }); 
    mongoose.connect('mongodb://localhost:27017/todoappData')
}

module.exports = dbConnect;