const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");
const { getPostsController, addPostController, updatePostController, deletePostController } = require("../controllers/postsController");

router.get("/", auth, getPostsController);
router.post("/createPost", auth, addPostController)
router.patch("/updatePost/:id", auth, updatePostController);
router.delete("/deletePost/:id", auth, deletePostController)

module.exports = router;
