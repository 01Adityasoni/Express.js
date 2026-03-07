const express = require('express');
const router = express.Router();

// import the todo controller
const todoController = require('../controllers/createTodo');
const { model } = require('mongoose');

// define api route post request to create a new todo item
router.post('/createTodo', todoController.createTodo);

module.exports = router;
