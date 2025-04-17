const express = require("express");
const { register, login } = require("../controler/authcontroler");
const { check } = require('express-validator');

const router = express.Router();

router.post("/register",
    [
        check('name').not().isEmpty().withMessage('Name required'),
        check('email').isEmail().withMessage('Valid email required'),
        check('password').isLength({ min: 6 }).withMessage('Min 6 characters'),
      ], register);
router.post("/login", login);

module.exports = router;
