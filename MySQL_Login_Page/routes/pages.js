const express = require("express");
const authController = require("../controllers/auth");
const router = express.Router();
router.get('/',authController.isLoggedIn, (req, res) => {
    res.sendFile("main.html", { root: './public/' })
});
router.get('/register', (req, res) => {
    res.sendFile("register.html", { root: './public/' })
});
router.get('/login', (req, res) => {
    res.sendFile("login.html", { root: './public/' })
});


//these are extra like profile
router.get('/profile', (req, res) => {
    res.sendFile("profile.html", { root: './public/' })
});
router.get('/main', (req, res) => {
    res.sendFile("main.html", { root: './public/' })
});
router.get('/home', (req, res) => {
    res.sendFile("home.html", { root: './public/' })
});


router.get('/profile', authController.isLoggedIn, (req, res) => {
    if (req.user) {
        res.sendFile("profile.html", { root: './public/' })
    } else {
        res.sendFile("login.html", { root: './public/' });
    }
})
module.exports = router;