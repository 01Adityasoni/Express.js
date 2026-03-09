// import the Todo model to interact with the database
const Todo = require('../models/todo');

// define route handler for deleting a todo item
exports.deleteTodo = async (req, res) => {
    try {
    // extract the id parameter from the request
    const { id } = req.params;
    // find the todo item by id and delete it from the database
    const response = await Todo.findByIdAndDelete(id);
    // send a success response with the deleted todo item json data
    res.status(200).json({
        success: true,
        message: 'Todo item deleted successfully',
        data: response
    });
    }
    catch (error) {
      // send an error response with the error message
      res.status(500).json({
        success: false,
        message: 'Failed to delete todo item',
        error: error.message
      });
    }
}