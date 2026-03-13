// import expres 
const express = require('express');

// create an instance of express
const app = express();

// import .env file 
require('dotenv').config();
const PORT = process.env.PORT || 3000 ;

// add middleware to parse JSON request bodies
app.use(express.json());

// import routes
const blogRoutes = require('./routes/blog');
// mount the blog routes
app.use('/api/v1', blogRoutes);


// connect with database and start server only after successful connection
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('Connected to MongoDB successfully');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log('Error connecting to MongoDB : ' + err);
        process.exit(1);
    });

// default route
app.get('/test', (req, res) => {
    res.send('Welcome to the Blog API');
});