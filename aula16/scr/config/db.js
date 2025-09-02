//Arquivo de configuração do bnco de dados

const mysql= require('mysql2/promise'); //Importndo o mysql2 com suporte a promisse

const db = mysql.createPool({
    host: "localhost", //endereço do servidor mysql
    user: "root", //usuario do banco de dados
    password:"senai", //senha do banco
    database: "back_end" // nome do banco
})

//Exportando meu modulo para ser usado em outro arquivo
module.exports = db