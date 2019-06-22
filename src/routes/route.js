const express = require('express');
const router = express.Router();
const controllers = require('../controllers/');
const axios = require('axios/index');

/* GET home page. */
router.get('/', controllers.LivroController.index);

router.get('/logout', function (req, res) {
    req.logOut();
    req.session.destroy();
    res.redirect('/');
});

router.post('/login', controllers.UsersController.login);

router.get('/singin', controllers.UsersController.index);

router.post('/api/singin/create', controllers.UsersController.create);

function autenticationMiddleware() {
    return (req, res,next) => {
        console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`)
        if (req.isAuthenticated()) return next();

        res.redirect('/');
    }
}

module.exports = router;
