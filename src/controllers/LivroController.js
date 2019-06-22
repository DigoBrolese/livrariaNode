const {
    livro: Livro,
  } = require('../models')
const BaseController = require('../controllers/BaseController.js');

class LivroController {

    async index(req, res) {
        const user = BaseController.getUserLogin(req);
        const livros = await Livro.findAll();

        return res.render('home', {livros, user});
    }

}

module.exports = new LivroController();