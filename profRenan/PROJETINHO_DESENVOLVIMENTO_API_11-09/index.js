const express = require('express');
const routes = require('./src/routes')


const app = express();

app.use(express.json());

// rotas
app.use(routes)
// erros

const PORT = 3000;
app.listen(PORT, () => {
console.log(`Servidor rodando em http://localhost:${PORT}`)
})