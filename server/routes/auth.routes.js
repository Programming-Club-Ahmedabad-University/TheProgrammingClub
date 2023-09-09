const express = require('express');
const router = express.Router();
const authMiddleWare = require('../middlewares/auth.middleware');
const authController = require('../controllers/auth.controller');


router.post('/signin', authController.signin);

router.post('/signup', authController.signup);

router.get('/test', authMiddleWare,(req, res) => {
    res.json(req.user);
});

module.exports = router;