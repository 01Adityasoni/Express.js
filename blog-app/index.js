// import express
const express = require('express');
// create an express app instance
const app = express();
// load config from env file
require('dotenv').config();
// get the port from env or use default 3000
const PORT = process.env.PORT || 3000;
// middleware to parse json request body
app.use(express.json());

// import the blog routes
const blogRoutes = require('./routes/blogs');
// mount the blog routes on the app
app.use('/api/v1/blogs', blogRoutes);


// connect to the database
const dbConnect = require('./config/database');
dbConnect();


// start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



// default route
app.get('/', (req, res) => {
    res.send('Welcome to the Blog APP');
});
