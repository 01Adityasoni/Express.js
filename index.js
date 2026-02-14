 // import express from 'express';
 const express = require('express');

  // create an express app
 const app = express();

 // define a port to listen on
    const port = 3000;

    // add middleware to parse JSON request bodies
    app.use(express.json());


    // get route or get request
    app.get('/', (req, res) => {
      res.send('Hello, World!');
    });   

    // post route or post request 
    app.post('/car', (req,res) => {
      res.send("recieve a post request to /car");
     });

 


    // start the server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });