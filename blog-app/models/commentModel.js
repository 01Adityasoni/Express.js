// import mongoose
const mongoose = require('mongoose');

// create a schema for comments 
const commentSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId, // reference to the post
        ref: 'Post',// reference to the Post model
    },
    user:{
        type: String,
        required: true,
    },
    body:{
        type: String,
        required: true,
    }
});

// export the model
module.exports = mongoose.model('Comment', commentSchema);