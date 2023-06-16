const express = require("express");
const router = express.Router();

const { getPostsMiddleware, addPostMiddleware, updatePostMiddleware, deletePostMiddleware } = require("../middlewares/postsMiddleware");
const { getPostsController, addPostController, updatePostController, deletePostController } = require("../controllers/postsController");

router.get("/", getPostsMiddleware, getPostsController);
router.post("/createPost", addPostMiddleware, addPostController)
router.patch("/updatePost/:id", updatePostMiddleware, updatePostController);
router.delete("/deletePost/:id", deletePostMiddleware, deletePostController)

module.exports = router;
