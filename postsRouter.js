const express = require("express");
router = express.Router();

let posts = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { id: 2, title: "The Prophet", author: "Kahlil Gibran", year: 1923 },
  { id: 3, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", year: 1997 },
  { id: 4, title: "Atomic Habits", author: "James Clear", year: 2018 },
];

// Get all posts or limit posts
router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
});

// Get post by ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.status(200).json(posts.filter((post) => post.id === id));
});

// Create a new post (request body will be logged)
router.post("/", (req, res) => {
  console.log(req.body);
  const newPost = {
    id:posts.length + 1,
    title:req.body.title,
    author:req.body.author,
    year: 2024
  }
  posts.push(newPost)
  res.status(201).json(posts);
});


//updating the pos
router.put("/:id",(req,res)=>{
  const id = parseInt(req.params.id)
  const post = posts.find((post)=>post.id === id)

  if (!post) {
    return res.status(404).json({message:"the post was not updated"})
  }
   res.status(200).json(posts)

})

module.exports = router;
