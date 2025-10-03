const express = require('express');
const app = express();
const userRoutes = require('./controller/userController');

app.use(express.json());
app.use('/users', userRoutes);


const PORT = 3000;
app.listen(PORT, () => {
console.log(`API rodando em http://localhost:${PORT}`)
});