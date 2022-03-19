const express = require('express');
const router = express.Router();
const controller = require('./controller');
router.get('/auth/signin' , controller.signin);

module.exports = router;