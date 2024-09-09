const express = require("express");
const path = require("path");
const app = express();
const postsRouter = require("./postsRouter");

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: false }));

// Route handling for posts
app.use("/api/posts", postsRouter);

// Start the server on port 3000
app.listen(3000, () => console.log("server is running on port 3000"));
