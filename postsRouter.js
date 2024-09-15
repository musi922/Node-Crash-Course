const express = require("express");
const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require("./controllers/postController");
router = express.Router();

// Get all posts or limit posts
router.get("/", getPosts);


// Get post by ID
router.get("/:id", getPost);

// Create a new post (request body will be logged)
router.post("/", createPost);

//updating the posts
router.put("/:id", updatePost);

//delete post

router.delete("/:id", deletePost);

module.exports = router;
