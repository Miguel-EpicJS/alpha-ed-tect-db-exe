const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const app = express();

const userRoutes = require("./src/router/user.routes");
const postRoutes = require("./src/router/posts.routes");
const categoryRoutes = require("./src/router/categories.routes");

app.use(cookieParser());
app.use(bodyParser.urlencoded( { extended: false } ));
app.use(bodyParser.json());

app.use("/user", userRoutes);
app.use("/post", postRoutes);
app.use("/category", categoryRoutes);

module.exports = app;