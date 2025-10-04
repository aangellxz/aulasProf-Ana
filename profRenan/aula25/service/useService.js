const db = require('../database/db');

const getAllUsers = async () =>{
    const [rows] = await db.query('SELECT * FROM users');
    return rows;
};

const getUsersById = async (id) =>{
    const [rows] = await db.query('SELCT * FROM users WHERE id = ?', [id]);
    return rows[0];
};

const createUser = async (user) =>{
    const {nome, email} = user;
    const [result] = await db.query('INSERT INTO users (nome, email) VALUES (?, ?) ', [nome,email]);
    return {id: result.insertId, ...user};
};

const deleteUser = async (id) =>{
    await db.query('DELETE FROM users WHERE id = ? ', [id]);
    return {mesage: 'Usuário deletado'};
};

module.exports = { getAllUsers, getUsersById, createUser, deleteUser};