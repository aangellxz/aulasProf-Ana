//1//
// Public = método e atributo que todos podem acessar diretamente
// Private = só pode ser acessado dentro da sua classe
// Protected  = é acessado pela sua classe e subclasse 

// GET = usado para puxar, pegar, usar, obter (pega um dado que já existe)
// SET = usado para alterar, modificar, definir, adicionar (definir regras e validações)

// Encapsulamento = esconde parte do código para segurança e controle de quem tem ou não acesso

//2//
// class Aluno {
//     #nome;
//     #nota;

//     constructor (nome, nota){
//         this.#nome = nome;
//         this.#nota = nota;
//     }
       
    //    setNome(nome){
    //     this.#nome = nome;
    //    }

    //    setNota(nota){

    //    }

    //    getNome(nome){
    //     return this.#nome
    //    };

    //    getNota(nota){
    //     return this.#nota
    //    }
// }

//3//
// // 
// class Carros {
//     ligar;
//     frear;
//     #velocidade;

//     constructor(vel){
//         this.#velocidade  = vel;
//         this.ligar = 0;
//     }

//     ligarCarro (){
//          this.ligar = 1
//     };

//     frearCaror (){
//          this.#velocidade--;
//     };

//     setVelocidade (velocidade) {
//         if(this.ligar = 1 && velocidade > 0)
//         this.#velocidade += velocidade;
//     }

//     getVelocidade (){
//         return this.#velocidade;
//     }
    
// }

// const cc  = new ControlaCarro ();
// cc.ligar();
// cc.setVelocidade(100);
// cc.frear();
// cc.getVelocidade();

//