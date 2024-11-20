//# ARRAY 5 POST
const posts = [
  {
    titolo: "Ciambellone",
    contenuto: "La ricetta",
    immagine: "/img/ciambellone.jpeg",
    tags: ["cucina", "ricetta", "ciambellone"],
  },

  {
    titolo: "Cracker di barbabietola",
    contenuto: "La ricetta",
    immagine: "/img/cracker_barbabietola.jpeg",
    tags: ["cucina", "ricetta", "barbabietola"],
  },

  {
    titolo: "Pane fritto dolce",
    contenuto: "La ricetta",
    immagine: "/img/pane_fritto_dolce.jpeg",
    tags: ["cucina", "ricetta", "pane"],
  },

  {
    titolo: "Pasta alla barbabietola",
    contenuto: "La ricetta",
    immagine: "/img/pasta_barbabietola.jpeg",
    tags: ["cucina", "ricetta", "pasta"],
  },

  {
    titolo: "Torta paesana",
    contenuto: "La ricetta",
    immagine: "/img/torta_paesana.jpeg",
    tags: ["cucina", "ricetta", "torta"],
  },
];

//*********************************************** */

const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  const text = "Server del mio blog";
  res.json(text);
  //   res.type("json").send(text) --> res.json(text)
  // res.send(text);
});

app.get("/bacheca", (req, res) => {
  const tag = req.query.tag;
  if (tag) {
    const filteredPosts = posts.filter((post) => {
      return post.tags.includes(tag.toLowerCase());
    });
    res.json(filteredPosts);
    console.log(filteredPosts);
  } else {
    res.json({
      count: posts.length,
      posts: posts,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
