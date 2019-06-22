const {
    users: Users,
} = require('../models');
const certificate = require('crypto');


class UsersController {

    async index(req, res) {

        return res.render('login/geral');

    }

    async create(req, res) {
        let dados = req.body;


        let password = '';
        if ((dados.nome).length === 0 || (dados.email).length === 0 || (dados.senha).length === 0) {
            return res.status(400).json({message: 'A campos vazios no Cadastro'});
        }else {
            let usuarios = await Users.findAll();
            usuarios.forEach((usuario) => {
                if (usuario.email === dados.email) {
                    res.status(400).json({message: 'O email ja está cadastrado'});
                }
            });
            if ((dados.senha).length > 5) {
                password = certificate.createHash('sha512').update(dados.senha).digest('hex');
            } else {
                return res.status(400).json({message: 'A senha deve ter 6 caractere'});
            }
        }

        try {
            Users.create({
                name: dados.nome,
                email: dados.email,
                password: password
            });
        } catch (e) {
            return res.status(400).json({message: e});
        }

        return res.status(200).json({message: "Usuario Cadastrado com Sucesso"});
    }

    async login(req, res) {

    }

}

module.exports = new UsersController();