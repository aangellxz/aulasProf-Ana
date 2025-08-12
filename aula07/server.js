// console.log("Boa noite")

const http = require("http"); //modulo interno no node
const port = 3000; //porta onde o node/servidor irá rodar

const server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-type":"text/plain"}); //definindo o cabeçalho
    res.write("Olá, servidor  em Nodejs está funcionando!");
    res.end(); //Finalizar
})

server.listen(port, ()=>{ //Servidor irá rodar na porta definida
    console.log(`Servidor rodando na porta ${port}`);
})

//Lendo arquivos
// const fs = require("fs"); // importando moludo interno do node chamado File System
// fs.readFile('dados.txt', 'utf-8', (err, data)=>{ //Chamando o mentido para ler o meu arquivo
//     if(err) //Se der erro vai aparecer no console
//         console.log('Erro:', err);

//     console.log(data); //Nessa inha irá mostrar os dados do meu arquivo "dados.txt"
// })


//Escrevendo no arquivo
const fs = require("fs"); 
fs.writeFile('dados.txt', 'Olá pessoal!', (erro)=>{
    if(erro)
        console.log("Houve um erro: " + erro)
    
    console.log('Arquivo salvo com sucesso')
})

//Acrescenta dados no arquivo
fs.appendFile("dados.txt", "Linha acrescentada!", (err)=>{
    if(err)
        console.log('Erro: ', err)
    console.log("Linha adicionada com sucesso!")
})
