const express = require('express');
const router = express.Router();
const Post = require('../models/postDB');
const { createPost, updatePost  ,deletePost } = require('../controllers/post_controllers');

// Create a new post
router.post('/create', createPost);

//update post
router.put('/update/:id' , updatePost);

// Delete post by id
router.delete('/delete/:id', deletePost);


module.exports = router;