// import mongoose
const mongoose = require('mongoose');

// create a schema for creating a post
const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    body:{
        type: String,
        required: true,
    },
    likes:[ // array of like references
        {
            type: mongoose.Schema.Types.ObjectId, // reference to the like
            ref: 'Like'
        }
    ],
    comments:[ // array of comment references
        {
            type: mongoose.Schema.Types.ObjectId, // reference to the comment
            ref: 'Comment'
        }
    ]

});


// export the model
module.exports = mongoose.model('Post', postSchema);