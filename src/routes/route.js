const express = require('express');
const router = express.Router();
const controllers = require('../controllers/');
const axios = require('axios/index');

/* GET home page. */
router.get('/', controllers.LivroController.index);

router.get('/login', controllers.UsersController.login);

router.get('/singin', controllers.UsersController.index);

router.post('/api/singin/create', controllers.UsersController.create);

module.exports = router;
