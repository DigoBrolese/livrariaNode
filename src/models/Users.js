module.exports = (sequelize, DataTypes) => {
    return sequelize.define('users', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Campo Nome não pode estar vazio"
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Campo Email não pode estar vazio"
                },
                isEmail: {
                    msg: "Email invalido"
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [6, 40],
                    msg: "Campo Senha deve possuir mais que 6 caractere"
                }
            }
        },
        type: DataTypes.STRING,
    });
};