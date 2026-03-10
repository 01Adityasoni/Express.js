const express = require('express');
const app = express();
 // load config from env file 
require('dotenv').config();
const PORT = process.env.PORT || 3000;
// middleware to parse json request body
app.use(express.json());
 

// import the todo routes
const todoRoutes = require('./routes/todo');

// mount the todo routes on the app
app.use('/api/v1', todoRoutes);


// start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// connect to the database
const dbConnect = require('./config/database');
dbConnect();

// default route
app.get('/', (req, res) => {
    res.send('Welcome to the Todo APP');
}); 