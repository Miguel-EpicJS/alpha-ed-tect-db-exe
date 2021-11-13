const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded( { extended: false } ));
app.use(bodyParser.json());

module.exports = app;