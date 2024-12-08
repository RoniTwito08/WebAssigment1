const express = require('express');
const { createComment, updateComment, deleteComment , getCommentById } = require('../controllers/comments-controllers');
const router = express.Router();

// Create a new comment
router.post('/CreateComment', createComment);

// Update a comment 
router.put('/update/:id', updateComment);
 
// Delete a comment
router.delete('/delete/:id', deleteComment);

// Get a comment by ID
router.get('/getComment/:id', getCommentById);

module.exports = router;