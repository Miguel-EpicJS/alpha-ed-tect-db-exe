const userRoutes = require('express').Router();

userRoutes.post("/login", (req, res) => { res.send("working: " + req)});
userRoutes.post("/signup", (req, res) => { res.send("working: " + req)});

userRoutes.patch("/update-user-type/:id", (req, res) => { res.send("working: " + req)});

userRoutes.delete("/delete-user/:id", (req, res) => { res.send("working: " + req)});


module.exports = userRoutes;