class Usuario {
    //classe pronta

    setId(id){
        this.id = id
    }

    setNome(nome){
        this.nome = nome;
    }

    setAtivo(ativo){
        this.ativo = ativo;
    }
    setDocumento(documento){
        this.documento = documento;
    }


    getId(id){
        return this.id;
    }

    getNome(nome){
        return this.nome;
    }

    getAtivo(ativo){
        return this.ativo;
    }
    getDocumento(documento){
        return this.documento;
    }
}

const usuario1 = new Usuario();
usuario1.setId(1);
usuario1.setNome('LIZA');
usuario1.setAtivo(true);
usuario1.setDocumento('06364170005');

usuario1.getId
usuario1.getNome
usuario1.getAtivo
usuario1.getDocumento