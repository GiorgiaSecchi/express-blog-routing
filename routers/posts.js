const express = require("express");
const router = express.Router();

const posts = require("../db/posts-db.js");
// console.log(posts);

//# ROTTE POSTS

//* index
router.get("/", (req, res) => {
  res.send("Lista dei posts");
});

module.exports = router;
