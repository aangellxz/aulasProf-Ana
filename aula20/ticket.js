const express = require('express')
const app = express();

app.use(express.json());

let tickets = [];

//Listar todos
app.get("/ticket", (req, res)=>{
    res.json(tickets)
});

//Add ticket
app.post("/ticket", (req, res)=>{
    const novoTicket = {
        id: tickets.length + 1,
        ...req.body
    }
    tickets.push(novoTicket);
});

app.put("/ticket/:id", (req, res)=>{
    const {id} = req.params

    let ticket = ticket.find(t => t.id === id )

    if(!ticket){
        return res.status(404).json({msg: "Ticket não encontrado!"});
    }

    ticket = {...ticket, ...req.body}

    ticket = tickets.map(t => t.id === id ? ticket : t)
    res.json(ticket);
});

app.delet("/ticket/:id", (req, res) => {
    const {id} = req.params;
    tickets = tickets.filter(t => t.id != id );
    res.json({
        msg: "Ticket atualizado com sucesso."
    })
})

// Função middleware
function middlewareValidarTicket( req, res, next){
        const {titulo, prioridade, descricao, categoria, nomeSolicitante, departamento, telefone, email} = req.body

        if(!titulo || !prioridade || !descricao || !categoria || !nomeSolicitante || !departamento || !telefone || !email){
            return res.status(400).json({msg: "Preencha os campos OBRIGATÓRIOS!"})
        }

        //Se estiver tudo certo, segue adiante
        next()
}

module.exports = app;

