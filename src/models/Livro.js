module.exports = (sequelize, DataTypes) => {
  const Livro = sequelize.define('livro', {
    nome_livro: DataTypes.STRING,

  });

  return Livro;
}