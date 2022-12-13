const router = require("express").Router();


/**
 * -------------- GET ROUTES ----------------
 */
router.get("/", (req, res, next) => {
    res.json({ message: "Hello World!" });
});
  

module.exports = router;