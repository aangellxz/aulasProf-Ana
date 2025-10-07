const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("senai", "root", "senai", {
    host: "localhost", //aqui você define o host do banco de dados
    dialect: "mysql", //aqui você seleciona o tipo de banco de dados que você está utilizando
});

sequelize.authenticate()
.then(() => console.log("Conectado pelo SEQUELIZE com sucesso!"))
.catch(err => console.error("Erro: ", err));

module.exports = sequelize;
