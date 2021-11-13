const postRoutes = require('express').Router();

postRoutes.get("/show-posts", (req, res) => { res.send("working: " + req) });
postRoutes.get("/show-post/:id", (req, res) => { res.send("working: " + req) });

postRoutes.post("/add-post", (req, res) => { res.send("working: " + req) });

postRoutes.put("/update-post/:id", (req, res) => { res.send("working: " + req) });

postRoutes.delete("/delete-post/:id", (req, res) => { res.send("working: " + req) });


module.exports = postRoutes;