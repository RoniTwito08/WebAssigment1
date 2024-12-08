const express = require('express');
const { createComment, updateComment } = require('../controllers/comments_controllers');
const router = express.Router();

// Create a new comment
router.post('/CreateComment', createComment);

// Update a comment 
router.put('/update/:id', updateComment);

module.exports = router;