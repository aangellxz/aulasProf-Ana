class Carro {
    constructor (marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    setMarca(marca){
        this.marca = marca;
    }

    setModelo(modelo){
        this.modelo = modelo;
    }
    setAno(ano){
        this.ano = ano;
    }

    
    getMarca(marca){
        return this.marca
    }

    getModelo(modelo){
        return this.modelo
    } 
    getAno(ano){
        return this.ano
    }

    ligar() {
        console.log('CARRO LIGADO')
    }

    desligar() {
        console.log('CARRO DESLIGADO')
    }
}

const carro1 = new Carro();
carro1.setAno('2025');
carro1.setModelo('SEDAN');
carro1.setMarca('honda');

carro1.getAno();
carro1.getModelo();
carro1.getMarca();

const carro2 = new Carro();
carro2.setAno('2026');
carro2.setModelo('Hatch');
carro2.setMarca('Toyota');

carro2.getAno();
carro2.getModelo();
carro2.getMarca();