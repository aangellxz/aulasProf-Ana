const  mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'senai',
    databse: 'users_db'
});

module.exports = pool.promise();