const cookieMiddleware = require("../middlewares/cookie.middleware");

const userController = require("../controllers/user.controller");

const userRoutes = require('express').Router();

userRoutes.post("/login", cookieMiddleware.loginCookie, userController.userLogin);
userRoutes.post("/signup", cookieMiddleware.loginCookie, userController.userSignup);

userRoutes.patch("/update-user/:id",  cookieMiddleware.verifyCookie, userController.userUpdate);

userRoutes.delete("/delete-user/:id",  cookieMiddleware.verifyCookie, userController.userDelete);


module.exports = userRoutes;