const {
    users: Users,
} = require('../models');
const BaseController = require('../controllers/BaseController.js');
const certificate = require('crypto');


class UsersController {

    async index(req, res) {

        return res.render('login/geral');

    }

    async create(req, res) {
        let dados = req.body;

        let password = '';
        if ((dados.senha).length > 5) {
            password = certificate.createHash('sha512').update(dados.senha).digest('hex');
        }

        try {
            await Users.create({
                name: dados.nome,
                email: dados.email,
                password: password
            }).catch(e => {
                let errorMessage = BaseController.makeMsgError(e.message);
                return res.status(400).json({message: errorMessage});
            });
        } catch (e) {
            return res.status(400).json({message: e});
        }

        return res.status(200).json({message: "Usuario Cadastrado com Sucesso"});
    }

    async login(req, res) {
        let session = req.session;

        let dados = req.body;
        let usuarioEncontrado = {};
        let password = '';
        if ((dados.email).length > 0 && (dados.senha).length > 0 ) {
            password = certificate.createHash('sha512').update(dados.senha).digest('hex');
        } else {
            return res.status(400).json({message: 'Email ou senha estao vazios'});
        }
        let usuarios = await Users.findAll({
            where: {
                email: dados.email,
                password: password
            }
        });

        if (usuarios.length > 0) {
            console.log(usuarios[0].dataValues);
            req.logIn(usuarios[0].dataValues, err => {
                if (err) { return res.status(400).json({message: err}) }

                res.redirect('/');
            });
        } else {
            return res.status(400).json({message: 'Usuario Não encontrado'});
        }
    }
}

module.exports = new UsersController();