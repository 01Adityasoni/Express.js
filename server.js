// make a instance of express or server instantiating

const express = require('express');
const app = express();

// use body-parser middleware to parse JSON request bodies
// used to parse req.body in express -> used in put , post 
const bodyParser = require('body-parser');

// specifically parse json data and add to the request body 
app.use(bodyParser.json());

// make a server on 3000 port

const server = app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


// create a route for the home page GET request
app.get('/', (request, response) => {
    response.send('Hello World!');
});

// POST request route 

app.post('/api/cars', (request, response) => {
    const {name , brand} = request.body ;
    console.log(`Car name: ${name}, Car brand: ${brand}`);
    response.send('Car data received');
});



// connect to the database
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to the database');
}).catch((error) => {
    console.error('Error connecting to the database:', error);
}
);