//Arquivo de configuração do servidor

const express = require('express'); //importando um modulo externo para o meu projeto; cria instancia

const app = express();
const port = 3000;

const usuarioRoute = require('./scr/routes/usuarios')

app.use(express.json()); //permite que o servidor leia os ddos em JSON enviados pelo corpo da requisição

//Chamando nossa ROTA GET de usuarios
app.use('/usuarios', usuarioRoute)
//Rota principal GET => localhost:3000
app.get('/', (req, res) =>{
    res.send("Olá pessoal, estou no navegdor")
})

//iniciar o servidor
app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}. Abra http://localhost:${port}`);
})

