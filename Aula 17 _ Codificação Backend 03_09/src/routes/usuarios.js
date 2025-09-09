// src/routes/usuarios.js
const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT id, nome FROM usuario');
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
        const [result] = await db.query('INSERT INTO usuario (nome, email, datahora_cadastro, datahora_atualizado) VALUES (?, ?, NOW(), NOW())', [nome, email]);
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
        const [result] = await db.query('DELETE FROM usuario WHERE id = ?', [id]);
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
        const [rows] = await db.query('SELECT id, nome FROM usuario WHERE id = ?', [id]);
        if (rows.affectedRows === 0) {
            return res.status(404).json({ erro: 'Usuário não encontrado' });
        }
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: 'Erro ao buscar usuário' });
    }
});

module.exports = router;
