const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    _id:{
        type: Number,
    },
    title: { 
        type: String, 
        required: true 
    },

    content: { 
        type: String, 
        required: true 
    },

    sender: { 
        type: String, 
        required: true 
    }, 
    idCommentsArray: {
        type: Array,
        default: []
    },


    createdAt: {
         type: Date,
          default: Date.now 
        },

});

module.exports = mongoose.model('Post', postSchema);