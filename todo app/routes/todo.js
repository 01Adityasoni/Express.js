const express = require('express');
const router = express.Router();

// import the todo controller
const {createTodo} = require('../controllers/createTodo');
const {getTodo , getTodoById} = require('../controllers/getTodo');
const {updateTodo} = require('../controllers/updateTodo');
const {deleteTodo} = require('../controllers/deleteTodo');


  
// define api route post request to create a new todo item
router.post('/createTodo', createTodo);
// define api route get request to fetch all todo items
router.get('/getTodo', getTodo);
// define api route get request to fetch a single todo item by id
router.get('/getTodo/:id', getTodoById);
// define api route put request to update a todo item by id
router.put('/updateTodo/:id', updateTodo);
// define api route delete request to delete a todo item by id
router.delete('/deleteTodo/:id', deleteTodo);



module.exports = router;
