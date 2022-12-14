const express = require("express");
const router = express.Router();

router.use('/auth', require('./signin.route'));

module.exports = router;