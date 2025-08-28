class Carro {
    nome; //public
    ano;  //public
    modelo; //public
    #chassi; //private

    constructor(nome, ano, modelo, chassi){
        this.nome = nome;
        this.ano = ano;
        this.modelo = modelo;
        this.#chassi = chassi;
    }

   setNomeChassi(chassi){ //alterar, modificar, definir
        this.#chassi = chassi;
    }
    getNomeChassi(){
        return this.#chassi; //puxar, pegar, usar, obter
    }
}

module.exports = Carro;