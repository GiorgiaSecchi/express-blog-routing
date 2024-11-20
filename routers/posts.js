const express = require("express");
const router = express.Router();

//# COLLEGAMENTO FILE CON LISTA POSTS

const posts = require("../db/posts-db.js");
// console.log(posts);

//# ROTTE POSTS

//* INDEX

router.get("/", (req, res) => {
  res.send("Visualizza la lista di tutti i posts");
});

//* SHOW

router.get("/:id", (req, res) => {
  res.send("Visualizza un post");
});

//* STORE

router.post("/", (req, res) => {
  res.send("Crea un nuovo post");
});

// router.get

module.exports = router;
