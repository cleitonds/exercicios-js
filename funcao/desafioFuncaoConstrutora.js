function Pessoa(nome) {
    constructor(nome) 
        this.nome = nome
    
    this.falar = function() {
        console.log(`O nome dela é ${this.nome}`)
    }
}

const p1 = new Pessoa('Priscila')
p1.falar()