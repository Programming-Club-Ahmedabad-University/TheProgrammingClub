const express = require("express");
const router = express.Router();
router.get('/',(req,res,next)=>{
    res.send("<h1>hello pClub</h1>")   ;
});
router.use('/auth', require('./signin.route'));

module.exports = router;