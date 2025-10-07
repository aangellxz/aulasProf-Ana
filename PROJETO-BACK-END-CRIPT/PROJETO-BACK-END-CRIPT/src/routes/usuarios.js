// src/routes/usuarios.js
const express = require('express');
const router = express.Router();

const Usuario = require("../models/Usuario");
const bcrypt = require ("bcrypt"); // importa o bcrypt no topo do arquivo

// GET /usuarios
router.get("/", async (req, res) => {
    try {
        const usuarios = await Usuario.findAll({
            attributes: ["id", "nome"], // só traz essas colunas
        });
        res.json(usuarios);
    } catch (err) {
        console.error(err);
        res.status(400).json({ erro: "Erro ao buscar usuários" });
    }
});

// POST /usuarios → criar novo usuário
router.post("/", async (req, res) => {
    try {
        const { nome, email, cpf, senha, ativo, nivel } = req.body;

         // 🔐 Gera o hash da senha antes de salvar no banco
         const saltRounds = 10; // número de "rodadas" de salt (mais = mais seguro, mas mais lento)
         const senhaHash = await bcrypt.hash(senha, saltRounds);
    
        // cria registro no banco
        const novoUsuario = await Usuario.create({
                nome,
                email,
                cpf,
                senha: senhaHash,
                ativo,
                data_cadastro: new Date(), // força cadastro com data atual
                nivel,
            });
    
        res.status(201).json({msg: "Usuário criado com sucesso."});
    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: "Erro ao criar usuário" });
    }
});

/*
// GET
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT id, nome FROM usuarios');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: 'Erro ao buscar usuários' });
    }
});

// POST
router.post('/', async (req, res) => {
    const { nome, email } = req.body;
    if (!nome || !email) return res.status(400).json({ erro: 'Nome e email obrigatórios' });

    try {
        const [result] = await db.query('INSERT INTO usuarios (nome, email, datahora_cadastro, datahora_atualizado) VALUES (?, ?, NOW(), NOW())', [nome, email]);
        res.status(201).json({ mensagem: 'Usuário cadastrado!', id: result.insertId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: 'Erro ao cadastrar usuário' });
    }
});

// DELETE /usuarios/:id
router.delete('/:id', async (req, res) => {
    const { id } = req.params; // Obtém o ID do usuário a ser deletado a partir dos parâmetros da URL
    try {
        const [result] = await db.query('DELETE FROM usuarios WHERE id = ?', [id]);
        if (result.affectedRows === 0) { // Verifica se algum registro foi afetado
            return res.status(404).json({ erro: 'Usuário não encontrado' });
        }
        res.json({ mensagem: 'Usuário deletado com sucesso' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: 'Erro ao deletar usuário' });
    }
});

//PUT /usuarios/:id
router.put('/:id', async (req, res) => { // Atualiza os dados de um usuário existente
    const { id } = req.params; // Obtém o ID do usuário a ser atualizado a partir dos parâmetros da URL
    const { nome, email } = req.body; // Obtém os novos dados do usuário a partir do corpo da requisição

    if (!nome || !email) {
        return res.status(400).json({ erro: 'Nome e email obrigatórios' });
    }

    try {
        const [result] = await db.query(
            'UPDATE usuarios SET nome = ?, email = ?, datahora_atualizado = NOW() WHERE id = ?',
            [nome, email, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ erro: 'Usuário não encontrado' });
        }

        res.json({ mensagem: 'Usuário atualizado com sucesso!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: 'Erro ao atualizar usuário' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const [rows] = await db.query('SELECT id, nome FROM usuarios WHERE id = ?', [id]);
        if (rows.affectedRows === 0) {
            return res.status(404).json({ erro: 'Usuário não encontrado' });
        }
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: 'Erro ao buscar usuário' });
    }
});

*/
module.exports = router;