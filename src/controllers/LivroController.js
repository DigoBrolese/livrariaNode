const {
    livro: Livro,
  } = require('../models')

class LivroController {

    async index(req, res) {
        const livros = await Livro.findAll();

        return res.render('home', {livros});
    }

}

module.exports = new LivroController();