// import the Todo model to interact with the database
const Todo = require('../models/todo');

// define route handler for fetching all todo items
exports.getTodo = async (req, res) => {
    try {
      // fetch all todo items from the database
      const todos = await Todo.find({});
      // send a success response with the fetched todo items json data
      res.status(200).json({
          success: true,
          message: 'Todo items fetched successfully',
          data: todos
      });
    }
    catch (error) {
      // handle any errors that occur during the fetching process
      console.log('Error fetching todo items:', error);
      res.status(500).json({
          success: false,
          message: 'Error fetching todo items',
          data: error
      });
    }
} 

// define route handler for fetching a single todo item by id

exports.getTodoById = async (req, res) => {
        try {
   // fetch a single todo item by id from the database
   const todoId = req.params.id;
   // find the todo item in the database using the provided id
    const todo = await Todo.findById({_id: todoId});
    if (!todo) {
        return res.status(404).json({
            success: false,
            message: 'Todo item not found',
            data: null
        });
    }
    // send a success response with the fetched todo item json data
    res.status(200).json({
        success: true,
        message: 'Todo item fetched successfully',
        data: todo
    });
}
catch (error) {
      console.log('Error fetching todo item:', error);
      res.status(500).json({
          success: false,
          message: 'Error fetching todo item',
          data: error
      });
    }
}