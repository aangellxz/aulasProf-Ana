import express from 'express'// biblioteca usada para criar apis
import mysql from 'mysql2/promise'
// const app = express(); // todos os metodos de express passam para a const app.
const pool = await mysql.createConnection({ // pool = reservatório / faz
    host: 'localhost', // cria
    user: 'root',
    password: 'senai',
    database: 'api_node'
});
const app = express()
app.use(express.json())

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

app.post("/usuarios", async(req,res) =>{
    try{
        const {body} = req
         const [results] = await pool.query(
        'INSERT INTO usuario (nome_usuario, idade_usuario) VALUES(?,?)',
       [body.nome, body.idade]
    ); 
    const [usuarioCriado] = await pool.query(
        "SELECT * FROM usuario WHERE id_usuario=?",
        results.insertId
    )

    res.status(201).json(results)
    
}catch(error){
        console.log(error)
     }
} )

app.delete("/usuarios/:id", async(req, res) => {
    try{
        const {id} = req.params;
        const [results] = await pool.query(
            "DELETE FROM usuario WHERE id_usuario=?",
            id
        );
        res.status(200).send("Usuário deletado com sucesso!", results)
    } catch (error){
        console.log(error)
    }
})

app.put("/usuarios/:id", async (req, res) =>{
    try{
        const {id} = req.params;
        const {body} = req

        const [results] = await pool.query(
            "UPDATE usuario SET `nome_usuario`=?, `idade_usuario`=? WHERE id_usuario =?",
            [body.nome, body.idade, id]
        )
        res.status(200).send("Usuário atualizado", results)
    } catch (error){
        console.log(error)
    }
})

app.listen(3000, () => {
    console.log(`Servidor rodando na porta: 3000`)
});