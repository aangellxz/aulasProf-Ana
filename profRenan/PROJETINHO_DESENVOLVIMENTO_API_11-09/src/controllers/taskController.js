const taskService = require('../services/taskService')

const getAll = (req, res) => {
    const tasks = taskService.getAll()
    res.json(tasks)
}

const getById = (req, res, next) => {
    try {
        const id = parseInt(req.params.id)
        const task = taskService.getById(id)
        res.json(task)
    } catch (error) {
        next(error)
    }
}


//create

const create = (req, res, next) => {
      try{
        const {title} = req.body; //Pegando o titulo do corpo da requisição
        const task = taskService.create(title);
        res.status(201).json(task)
      }catch (error) {
        next(error);
      }
}

//Update

const update = (req, res, next) => {
    try {
        const id = parseInt(req.parms.id); //Converte para inteiro
        const {title, done} = req.body
        const task = taskService.update(id, {title, done})
        res.json(task)
     }catch (error) {
        next(error)
     }   
}

const remove = (req, res, next) => {
    try {
        const id = parseInt(req.parms.id);
        const delet = taskService.del(id);
        res.json({msg: "Tarefinha excluida!"});
    } catch (error) {
        next(error);
    }
}

module.exports = { getAll, getById, update, create, remove }