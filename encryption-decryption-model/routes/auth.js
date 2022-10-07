const express = require('express');
const authController = require('../controllers/auth')

const router = express.Router();

router.post("/register", authController.register) // imported as a register.hbs files

module.exports= router;
