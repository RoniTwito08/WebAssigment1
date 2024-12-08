const express = require('express');
const Comment = require('../models/commentDB');
const Post = require('../models/postDB');

// Create a new comment
const createComment = async (req, res) => {
    try {
        const {_id , postId, content, sender } = req.body;
        console.log(req.body);
        if (!postId || !content || !sender) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        const newComment = await Comment.create({_id , postId, content, sender });
        const post = await Post.findById(postId);
        post.idCommentsArray.push(newComment._id);
        await post.save();
        res.status(201).json(newComment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create the comment' });
    }
};
// Update a comment
const updateComment = async (req, res) => {
    try {
        const { content, sender } = req.body;
        const comment = await Comment.findById(req.params.id);
        if (!comment) {
            return res.status(404).json({ error: 'Comment not found' });
        }
        if (content || sender) {
            comment.content = content;
            comment.sender = sender;
        }
        await comment.save();
        res.status(200).json({ message: 'Comment ID updated successfully', comment });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { createComment, updateComment};