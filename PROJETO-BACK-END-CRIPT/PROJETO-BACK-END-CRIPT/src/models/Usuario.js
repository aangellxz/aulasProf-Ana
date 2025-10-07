// src/models/Usuario.js
const { DataTypes } = require("sequelize"); //tipos de dados, https://sequelize.org/docs/v6/core-concepts/model-basics/#strings
const sequelize = require("../config/database");

const Usuario = sequelize.define("usuario", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    cpf: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
    },
    senha: {
        type: DataTypes.STRING(36),
        allowNull: false,
    },
    ativo: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    data_cadastro: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    nivel: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    tableName: "usuario", // nome da tabela no banco
    timestamps: false,    // desabilita createdAt/updatedAt automáticos
});

module.exports = Usuario;
