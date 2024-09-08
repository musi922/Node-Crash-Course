const express = require("express");
router = express.Router();

let posts = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { id: 2, title: "The Prophet", author: "Kahlil Gibran", year: 1923 },
  { id: 3, title: "Richard", author: "Rich Kid In the House", year: 1923 },
  { id: 4, title: "Richard", author: "Rich Kid In the House", year: 1923 },
];

router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
});
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.status(200).json(posts.filter((post) => post.id === id));
});

module.exports = router;
