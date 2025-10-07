// Importa o Express
const bodyParser = require("body-parser");
const loginRoutes = require( "./src/routes/login.js");
const express = require('express'); // Cria uma instância do Express
const app = express(); // Define a porta do servidor e o endereço onde ele vai rodar
const PORT = 3000; // Porta onde o servidor vai rodar

const cors = require('cors');
app.use(cors());

// Permite que o servidor leia dados JSON enviados pelo corpo da requisição
app.use(express.json());

// Rota principal (GET) - só para testar
app.get('/', (req, res) => { 
  res.send('Olá, mundo!');
});

// Rota para usuários (GET)
const usuariosRouter = require('./src/routes/usuarios');
app.use('/usuarios', usuariosRouter); // ou se quiser fazer assim app.use("/usuarios", require("./src/routes/usuarios"));

// Configura para entender dados de formulários e JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rota de login
app.use("/login", loginRoutes);

// Inicia o servidor
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`) );