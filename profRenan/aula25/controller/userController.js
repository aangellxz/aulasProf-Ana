const express = require('express');
const router = express.Router();
const userService = require('../service/userService');

router.get('/', async (req, res) =>{
    const users = await userService.getAllUsers();
    res.json(users);
});

router.get('/:id', async (req, res) =>{
    const user = await userService.getUsersById(req.params.id);
    if (user) res.json(user);
    else res.status(404).json({mesage: 'Usuário não encontrado'});
});

router.post('/', async (req, res) =>{
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
});

router.delete('/:id', async (req, res) =>{
    await userService.deleteUser(req.params.id);
    req.json({mesage: 'Usuário deletado'});
});

module.exports = router;