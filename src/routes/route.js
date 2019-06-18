const express = require('express');
const router = express.Router();
const controllers = require('../controllers/')
const axios = require('axios/index');

/* GET home page. */
router.get('/', controllers.HomeController.index);

module.exports = router;
