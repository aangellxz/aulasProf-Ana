const express = require('express');
const router = express.Router();
const db = require('../config/db');


//localhost:3000/usuarios
// ROTA GET - RETORNA TODOS OS USUARIOS
router.get('/', async () => {
    try {
        const [rows] = await db.query("SELECT id, nome, email FROM usuario");
        res.json(rows); //Retorna a consulta da query
    } catch (error){
        console.log('Error:', error);
        res.status(500).json({erro: "Erro ao buscar usuarios"})
    }
})

//exportar modulo
module.exports = router;