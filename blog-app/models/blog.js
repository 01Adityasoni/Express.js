// import mongoose
const mongoose = require('mongoose');
// define the schema for the blog model
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 100
    },
    content: {
        type: String,
        required: true,
        maxLength: 5000
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    likes: {
        type: Number,
        required: true,
        default: 0
    },
    comments:{
        type: String,
        required: false,
        maxLength: 1000
    }
});

module.exports = mongoose.model('Blog', blogSchema);