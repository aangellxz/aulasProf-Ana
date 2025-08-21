const cep = `88032-090`

//Fetch API - Nativo JavaScript
fetch(`https://viacep.com.br/ws/${cep}/json/`)
.then(res => res.json()) //converte para objeto
.then(data => console.log(data)) //recebe os dados convertidos e mostr os dados
.catch(err => console.log(err)) // se der erro, captura e mostra o erro


//#######################################################

//FUunçao que lê os dados do arquivo
function lerDados(arquivo= "usuarios.json"){
    //retorna os dados convertidos para objeto
    return JSON.parse(fs.readFile(arquivo, 'utf-8')) 
}

//Salvar os dados no arquivo
function salvarDados(arquivo= "usuarios.json", dados){
     // Usa a função de escrever no arquivo, passando como parametros o arquivo e um metodo que converte o objeto para JSON 
    fs.writeFileSync(arquivo, JSON.stringify(dados, null, 2));
}

// Criar nosso servidor com node
const http = require('http');
const { channel } = require('diagnostics_channel');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res)=>{
    //Define o conteudo da resposta
    res.setHeader("Content-type", "application/json");

    if(req.method === "GET" && req.url === '/dados'){
        const dados = lerDados('usuarios.json'); // retorna os dados do JSON
        res.writeHead(200);
        res.end(JSON.stringify(dados));
    } else if(req.method === 'POST' && req.url === "/dados"){
        let body = '';

        //É um evento que escuta quando os dados chegam
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try{ //Tudo que der certo entra aqui
                const novoDado = JSON.parse(body)

                //Lê o json existente
                const dados = lerDados('usuarios.json');

                //Gera o ID
                novoDado.id = 99;

                //Adiciona o novo dados no json
                dados.push(novoDado);

                //Chama função salvar dados
                salvarDados('usuarios.json', dados);

                res.writeHead(201); //Responde ao cliente com status 201 (criado com sucesso)

            }catch (error) { //Tudo que der errado entra aqui
                console.log("Ocorreu um erro:", error);
                res,writeHead(400)
            }
        })
    } else{
        res.writeHead(404);
        res.end("Página não existe.")
    }
})

server.listen(port, ()=>{ //Servidor irá rodar na porta definida
    console.log(`Servidor rodando na porta ${port}`);
});

const url = `http://localhost:${port}/dados`;

const objNovoDado = {
    nome: "Ronaldo Emanuel Porsche do Victor",
    idade: 105,
    salario: 250.00
}

fetch(url, {
    method: "POST",
    headers: {
        'content-type': 'appliction/json'
    },
    body:  JSON.stringify(objNovoDado)
})

.then(response =>{
    if(!response)
         console.log("Errorrrrr");

    return response.json();
})

.then(data => console.log("Resposta do servidor:", data))
.catch(error =>{
    console.log('Error', error)
})

