const express = require('express');
const router = express.Router();
const controllers = require('../controllers/');
const axios = require('axios/index');

/* GET home page. */
router.get('/', controllers.LivroController.index);

router.get('/singin', function (req, res) {
    return res.render('login/geral');
});

module.exports = router;
