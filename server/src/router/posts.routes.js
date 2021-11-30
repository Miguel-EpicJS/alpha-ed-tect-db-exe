const postRoutes = require("express").Router();

const postsController = require("../controllers/post.controller");

const cookieMiddleware = require("../middlewares/cookie.middleware");

postRoutes.get("/show-posts", postsController.getPosts);
postRoutes.get("/show-post/:id", postsController.getPosts);

postRoutes.post("/add-post", cookieMiddleware.verifyCookie, postsController.addPost);

postRoutes.put("/update-post/:id", cookieMiddleware.verifyCookie, postsController.postUpdate);

postRoutes.delete("/delete-post/:id", (req, res) => { res.send("working: " + req) });


module.exports = postRoutes;