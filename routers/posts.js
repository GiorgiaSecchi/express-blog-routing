const express = require("express");
const router = express.Router();

//# COLLEGAMENTO FILE CON LISTA POSTS

const posts = require("../db/posts-db.js");
// console.log(posts);

//# ROTTE POSTS

//* INDEX

router.get("/", (req, res) => {
  res.send("Visualizzare la lista di tutti i posts");
});

//* SHOW

router.get("/:id", (req, res) => {
  res.send("Visualizzare un post");
});

//*

// router.get

module.exports = router;
