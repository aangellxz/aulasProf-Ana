import express from 'express'
import mysql from 'mysql2/promise'
const app = express(); // todos os metodos de express passam para a const app.
const pool = await mysql.createConnection({ // pool = reservatório / faz
    host: 'localhost', // cria
    user: 'root',
    password: 'senai',
    database: 'api_node'
});
app.get("/", (req, res) => {
    res.send("Olá mundo!")
}) //


app.get("/usuarios", async (req, res) => {
    const [results] = await pool.query(
        'SELECT * FROM usuario'
    );
    res.send(results)
});

app.get("/usuarios/:id", async (req, res) => {
    const {id} = req.params
    const [results] = await pool.query(
        'SELECT * FROM usuario WHERE id_usuario=?', id
    );
    res.send(results)
});

app.listen(3000, () => {
    console.log(`Servidor rodando na porta: 3000`)
});