const { default: mongoose } = require('mongoose');
const Posts = require('../models/postsModel')

const getPostsController = async (req, res, next) => {
    try {
        const posts = await Posts.find()
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};


const addPostController = async (req, res, next) => {
    const { body } = req
    try {
        let obj = { title: body.title, description: body.description, author: body.author, image: body.image }
        const createPost = await Posts.create(obj);

        res.status(200).json(createPost)
        //db insert logic here
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const updatePostController = async (req, res, next) => {
    const { body, params } = req
    try {
        let obj = { title: body.title, description: body.description, author: body.author, image: body.image }
        let id = params.id
        const updatePost = await Posts.findOneAndUpdate({ _id: id }, { $set: obj });

        res.status(200).json(updatePost)
        //db insert logic here
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const deletePostController = async (req, res, next) => {
    const { params } = req
    try {
        let id = params.id
        const deletePost = await Posts.findByIdAndDelete({ _id: new mongoose.Types.ObjectId(id) });

        res.status(200).json(deletePost)
        //db insert logic here
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
};

module.exports = { getPostsController, addPostController, updatePostController, deletePostController };
