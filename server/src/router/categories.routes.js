const categoryRoutes = require('express').Router();

const categoryController = require("../controllers/category.controller");

const cookieMiddleware = require("../middlewares/cookie.middleware");


categoryRoutes.get("/show-categories", categoryController.getCategories );
categoryRoutes.get("/show-category/:id", categoryController.getCategories);
categoryRoutes.get("/count-categories", categoryController.countCategories);

categoryRoutes.post("/add-category", cookieMiddleware.verifyCookie, categoryController.setCategory);

categoryRoutes.put("/update-category/:id", cookieMiddleware.verifyCookie, categoryController.categoryUpdate);

categoryRoutes.delete("/delete-category/:id", cookieMiddleware.verifyCookie, categoryController.categoryDelete);


module.exports = categoryRoutes;