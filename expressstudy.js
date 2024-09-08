const express = require("express");
const path = require("path");
const app = express();
const postsRouter = require("./postsRouter")

app.use("/api/posts",postsRouter)

app.listen(3000, () => console.log("server is running on port 3000"));
