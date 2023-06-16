const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    author: String,
    image: String,
    createdAt: {
        type: Date,
        default: new Date()
    },

})

const Posts = mongoose.model('Posts', postSchema);

module.exports = Posts;