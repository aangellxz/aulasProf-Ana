const mysql = require("mysql2/promise"); // Importa o módulo mysql2 com suporte a Promises

const db = mysql.createPool({
    host: "localhost",     // endereço do servidor MySQL
    user: "root",          // seu usuário do banco
    password: "", // sua senha
    database: "node_mysql", // nome do banco de dados
});

// Exporta o pool de conexões para ser usado em outros arquivos
module.exports = db;