const postRoutes = require("express").Router();

const postsController = require("../controllers/post.controller");

const cookieMiddleware = require("../middlewares/cookie.middleware");

postRoutes.get("/show-posts", postsController.getPosts);
postRoutes.get("/search-posts", postsController.searchPosts);
postRoutes.get("/show-all-posts", postsController.getAllPosts);
postRoutes.get("/show-post/:id", postsController.getPost);

postRoutes.post("/add-post", cookieMiddleware.verifyCookie, postsController.addPost);
postRoutes.post("/add-post-like/:id", cookieMiddleware.verifyCookie, postsController.addPostLike);
postRoutes.post("/remove-post-like/:id", cookieMiddleware.verifyCookie, postsController.removePostLike);

postRoutes.put("/update-post/:id", cookieMiddleware.verifyCookie, postsController.postUpdate);
postRoutes.put("/validate-post/:id", cookieMiddleware.verifyCookie, postsController.validatePost);

postRoutes.delete("/delete-post/:id", cookieMiddleware.verifyCookie, postsController.postDelete);


module.exports = postRoutes;