// import Carro from "./Carro.js";


// const objCarro = new Carro();
// objCarro.nome = "O nome da menina";
// let nome = objCarro.nome;
// console.log("O nome é: ", nome);

// const objCarro2 = new Carro(); // instanciando minha classe
// objCarro2.definirNomeChassi("123ABC!@#"); //definindo o nome do meu chassi
// let chassi = objCarro2.pegarNomeChassi(); // aqui estou capturando o nome do meu chassi
// console.log("O chassi é: " + chassi); //mostra o nome do chassi

import ContaBancaria from "./ContaBancaria.js";

let saldoInicial = 100000; //meu saldo inicial

//meu objeto (contaBancaria )
const contaBancaria = new ContaBancaria(saldoInicial); //instanciando minha class

//depositando 20 mil reais na minha conta
contaBancaria.depositar(20000);

let extrato = contaBancaria.getExtrato();
console.log("Meu saldo é: ", extrato)

//retirando 5 mil reais da minha conta
contaBancaria.sacar(5000);
console.log("Meu saldo é: ", contaBancaria.getExtrato());

// 115000 mil restantes
