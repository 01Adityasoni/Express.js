const express = require('express');
const app = express.Router();

// import the blog controller
 const { createBlog } = require('../controllers/createBlogs');
 //const { getBlogs} = require('../controllers/getBlogs');


 // define api route post request to create a new blog
 app.post('/createBlog', createBlog);


 



// export the app
 module.exports = app;