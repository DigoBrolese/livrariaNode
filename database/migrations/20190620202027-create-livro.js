'use strict';

module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('livros', {
            id: {
                allowNull: false,
                autoIncrement:true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            nome_livro: {
                type: DataTypes.STRING,
            },
            dir_img: {
                type: DataTypes.STRING,
            },
            valor: {
                type: DataTypes.STRING,
            },
            autor: {
                type: DataTypes.STRING,
            },
            paginas: {
                type: DataTypes.INTEGER,
            },
            editora: {
                type: DataTypes.STRING,
            },
            idioma: {
                type: DataTypes.STRING,
            },
            descricao: {
                type: DataTypes.TEXT,
            },
            dt_publicacao: {
                type: DataTypes.DATE,
            },
        });
    },

    down: (queryInterface) => {
        return queryInterface.dropTable('livro');
    }
};
