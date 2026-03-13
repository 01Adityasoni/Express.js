// import the express module
const express = require('express');

// create a router instance
const router = express.Router();

// import controller 
const {createComment} = require('../controllers/commentController');


// mapping routes
router.post('/create', createComment);



// export the router
module.exports = router;