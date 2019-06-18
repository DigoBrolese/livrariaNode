const {
    livro: Livro,
  } = require('../models')

class HomeController {

    async index(req, res) {
        const livros = await Livro.findAll();

        return res.render('home', {livros});
    }

}

module.exports = new HomeController();