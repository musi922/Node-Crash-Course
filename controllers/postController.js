let posts = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { id: 2, title: "The Prophet", author: "Kahlil Gibran", year: 1923 },
  { id: 3, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", year: 1997 },
  { id: 4, title: "Atomic Habits", author: "James Clear", year: 2018 },
];

//@desc Get all posts
//@route GET /api/posts

const getPosts = (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
};

//@desc Get single post
//@route GET /api/posts/:id

const getPost = (req, res) => {
  const id = parseInt(req.params.id);
  res.status(200).json(posts.filter((post) => post.id === id));
};

//@desc POST create post
//@route POST /api/posts/

const createPost = (req, res) => {
  console.log(req.body);
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    author: req.body.author,
    year: 2024,
  };
  posts.push(newPost);
  res.status(201).json(posts);
};

//@desc UPDATE UPDATE post
//@route UPDATE /api/posts/:id

const updatePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error("the post was not found");
    res.status(404);
    return next(error);
  }
  post.author = req.body.author;
  post.title = req.body.title;
  res.status(200).json(posts);
};

//@desc DELETE UPDATE post
//@route DELETE /api/posts/:id

const deletePost = (req, res) => {
  const id = parseInt(req.params.id);
  const posti = posts.find((post) => post.id === id);

  if (!posti) {
    const error = new Error("the post was not found");
    res.status(404);
    return next(error);
  }

  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);
};

module.exports = {
  getPosts,
  getPost,
  updatePost,
  deletePost,
  createPost,
};
