const express = require("express");
const router = express.Router();

router.use('/auth', require('./signup.route'));
router.use('/auth', require('./signin.route'));


module.exports = router;