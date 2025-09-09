const mysql = require("mysql2/promise"); // Importa o módulo mysql2 com suporte a Promises

const db = mysql.createPool({
    host: "localhost",     // endereço do servidor MySQL
    user: "root",          // seu usuário do banco
    password: "senai", // sua senha
    database: "back_end", // nome do banco de dados
});

// Exporta o pool de conexões para ser usado em outros arquivos
module.exports = db;