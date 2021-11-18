const categoryRoutes = require('express').Router();

const categoryController = require("../controllers/category.controller");

const cookieMiddleware = require("../middlewares/cookie.middleware");


categoryRoutes.get("/show-categories", categoryController.getCategories );
categoryRoutes.get("/show-category/:id", categoryController.getCategories);

categoryRoutes.post("/add-category", cookieMiddleware.verifyCookie, categoryController.setCategory);

categoryRoutes.put("/update-category/:id", cookieMiddleware.verifyCookie, (req, res) => { res.send("working: " + req) });

categoryRoutes.delete("/delete-category/:id", cookieMiddleware.verifyCookie, (req, res) => { res.send("working: " + req) });


module.exports = categoryRoutes;