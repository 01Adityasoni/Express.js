// import the Todo model to interact with the database
const Todo = require('../models/todo');

// define route handler for updating a todo item
exports.updateTodo = async (req, res) => {
    try {
    // get the id of the todo item to be updated from the request parameters
    const {id} = req.params; // second way to get id const id = req.params.id;
    // get the updated title and description from the request body
    const {title, description} = req.body;
    // find the todo item by id and update it with the new title and description
    const updatedTodo = await Todo.findByIdAndUpdate({_id: id}, {title, description , updatedAt: Date.now()});
    // send a success response with the updated todo item json data
    res.status(200).json({
        success: true,
        message: 'Todo item updated successfully',
        data: updatedTodo
    });
    }
    catch (error) {
      // send an error response with the error message
      res.status(500).json({
        success: false,
        message: 'Failed to update todo item',
        error: error.message
      });
    }
}