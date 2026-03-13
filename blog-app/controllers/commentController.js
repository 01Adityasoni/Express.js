// import model
const Post = require('../models/postModel');
const Comment = require('../models/commentModel');


// business logic

exports.createComment = async (req, res) => {
    try {
       // fetch data from request body
       const { postId, user, body } = req.body;

       // create a new comment
       const comment = new Comment({
           post: postId,
           user,
           body
       });
       // save the comment to the database
       const savedComment = await comment.save();

       // find the post and add a new comment in the comments array
       const updatedPost = await Post.findByIdAndUpdate(
           postId,
           { $push: { comments: savedComment._id } },
           { new: true }
       )
       .populate('comments')
       .exec();

       res.status(201).json({ message: 'Comment created successfully', comment: savedComment, post: updatedPost });   
    }
    catch (error) {
        console.error('Error creating comment:', error);
        res.status(500).json({ message: 'Internal server error' }); 

    } 
};