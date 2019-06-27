const {
    livro: Livro,
  } = require('../models');
const BaseController = require('../controllers/BaseController.js');
const axios = require('axios/index');
const moment = require('moment');

class LivroController {

    async index(req, res) {
        const user = BaseController.getUserLogin(req);
        const livros = await Livro.findAll();
        const livrosApi = await axios.get("https://www.googleapis.com/books/v1/volumes?q=subject:Fiction&langRestrict=pt&maxResults=10");

        return res.render('home', {livros, user, livrosApi: livrosApi.data.items});
    }

    async detalhes(req, res) {

        const livrosBanco = await Livro.findAll( { where: { id: req.params.id } } );
        let livroRes = {};
        let livroBusca = {};
        if (livrosBanco.length > 0) {
            livroBusca = livrosBanco[0].dataValues;
            livroRes = {
                'nome_livro': ((livroBusca.nome_livro != undefined) ? livroBusca.nome_livro : "Não encontrado"),
                'autor': ((livroBusca.autor != undefined) ? livroBusca.autor : "Não encontrado"),
                'dir_img': "http://localhost:3000/"+((livroBusca.dir_img == undefined) ? 'img/no_cover_thumb.gif' : livroBusca.dir_img),
                'editora': ((livroBusca.editora != undefined) ? livroBusca.editora : "Não encontrado"),
                'dt_publicacao': ((livroBusca.dt_publicacao != undefined) ? moment.utc(livroBusca.dt_publicacao).format('DD/MM/YYYY') : "Não encontrado"),
                'idioma': ((livroBusca.idioma != undefined) ? (livroBusca.idioma).toUpperCase() : "Não encontrado"),
                'valor': ((livroBusca.valor != undefined) ? (livroBusca.valor) : "Não encontrado"),
                'paginas': ((livroBusca.paginas != undefined) ? (livroBusca.paginas) : "Não encontrado"),
                'descricao': ((livroBusca.descricao != undefined) ? (livroBusca.descricao).toUpperCase() : "Sem descrição"),
            };
        } else {
            const reqLivroApi = await axios.get("https://www.googleapis.com/books/v1/volumes/"+req.params.id);
            livroBusca = reqLivroApi.data.volumeInfo;
            livroRes = {
                'nome_livro': ((livroBusca.title != undefined) ? livroBusca.title : "Não encontrado"),
                'autor': ((livroBusca.authors != undefined) ? livroBusca.authors.join(', ') : "Não encontrado"),
                'dir_img': ((livroBusca.imageLinks == undefined) ? 'img/no_cover_thumb.gif' : livroBusca.imageLinks.thumbnail),
                'editora': ((livroBusca.publisher != undefined) ? livroBusca.publisher : "Não encontrado"),
                'dt_publicacao': ((livroBusca.publishedDate != undefined) ? (livroBusca.publishedDate).split('-').reverse().join('/') : "Não encontrado"),
                'idioma': ((livroBusca.language != undefined) ? (livroBusca.language).toUpperCase() : "Não encontrado"),
                'valor': "79.90",
                'paginas': ((livroBusca.pageCount != undefined) ? livroBusca.pageCount : "Não encontrado"),
                'descricao': ((livroBusca.description != undefined) ? (livroBusca.description).toUpperCase() : "Sem descrição"),
            };
        }

        return res.render('detalhes/geral', {livro: livroRes })
    }

}

module.exports = new LivroController();