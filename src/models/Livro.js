module.exports = (sequelize, DataTypes) => {
    const Livro = sequelize.define('livro', {
        nome_livro: DataTypes.STRING,
        dir_img: DataTypes.STRING,
        valor: DataTypes.STRING,
        autor: DataTypes.STRING,
        paginas: DataTypes.STRING,
        editora: DataTypes.STRING,
        idioma: DataTypes.STRING,
        descricao: DataTypes.STRING,
        dt_publicacao: DataTypes.STRING,
    });

    return Livro;
};