// import the blog model to interact with the database
const Blog = require('../models/blog');
// define route handler for creating a new blog
exports.createBlog = async (req, res) => {
    try {
        console.log(req.body);
        // create a new blog using the request body
        const { title, content } = req.body;
        // create a new instance of the Blog model with the provided title and content and insert it into the database
        const response = await Blog.create({ title, content });
        // send a success response with the created blog post json data
        res.status(201).json({
            success: true,
            message: 'Blog post created successfully',
            data: response
        });
    } 
    catch (error) {
        // handle any errors that occur during the creation process
        console.log('Error creating blog post:', error);
        res.status(500).json({
            success: false,
            message: 'Error creating blog post',
            data: error
        });
    }
}