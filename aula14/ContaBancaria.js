class ContaBancaria {
    #saldo;

    constructor (saldoInicial){ //
        this.#saldo = saldoInicial;
    }

    // método depositar = get
    depositar (valor){
        if(valor > 0)
            this.#saldo = this.#saldo + valor;
    }
    
    // método sacar = set
    sacar(valor){
        if(valor <= this.#saldo)
            this.#saldo = this.#saldo - valor;
    }

    getExtrato (){
        return this.#saldo;
    }
}

module.exports = ContaBancaria;