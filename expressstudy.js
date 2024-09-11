const express = require("express");
const path = require("path");
const app = express();
const postsRouter = require("./postsRouter");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/error");
const notFound = require("./middleware/notFound");

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: false }));

//logger middleware
app.use(logger);

//static folders to use now must be in public
app.use(express.static(path.join(__dirname, "views")));

// Route handling for posts
app.use("/api/posts", postsRouter);

app.use(notFound);

//error handling middle ware
app.use(errorHandler);

// Start the server on port 3000
app.listen(3000, () => console.log("server is running on port 3000"));
