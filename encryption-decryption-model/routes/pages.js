const express = require('express');

const router = express.Router();

router.get("/", (req, res) =>{
    // res.send("<h1>Home page</he>")
    res.render("index.hbs");  // or we can give index or res.render("index");
});

router.get("/register", (req, res) =>{
    res.render("register.hbs");
});

router.get("/login", (req, res) =>{
    res.render("login.hbs");  
});

module.exports= router;