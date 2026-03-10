// import the Todo model to interact with the database
const Todo = require('../models/todo');

// define route handler for creating a new todo item
exports.createTodo = async (req, res) => {
    try { 
        // create a new todo item using the request body
        const { title, description } = req.body;
        // create a new instance of the Todo model with the provided title and description and insert it into the database
        const response = await Todo.create({ title, description });
        // send a success response with the created todo item json data
        res.status(201).json({
            success: true,
            message: 'Todo item created successfully',
            data: response
        });
    } 
    catch (error) {
        // handle any errors that occur during the creation process
        console.log('Error creating todo item:', error);
        res.status(500).json({
            success: false,
            message: 'Error creating todo item',
            data: error
        });
    }
}