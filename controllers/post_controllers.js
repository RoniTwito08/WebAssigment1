const express = require('express');
const Post = require('../models/postDB');
const Comment = require('../models/commentDB');

// Create a new post
const createPost = async (req, res) => {
    try {
        const {_id , title, content, sender } = req.body;

        if (!title || !content || !sender) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const newPost = await Post.create({_id , title, content, sender });
        res.status(201).json(newPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create the post' });
    }
};
// Update a post
const updatePost = async (req, res) => {
    try {
        const { title, content, sender } = req.body;
        const post = await Post.findById(req.params.id); 
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        if (title || content || sender) {
            post.title = title;
            post.content = content;
            post.sender = sender;
        }
        await post.save();
        res.status(200).json({ message: 'Post ID updated successfully', post });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

//delete a post
const deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if(!post) {
            return res.status(404).json({error: 'Post not found'});
        }
        res.status(200).json({message: 'Post deleted'});
    } catch (err) {
        res.status(400).json({error: err.message});
    }
};

module.exports = {deletePost, updatePost, createPost};  