class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`O nome dela é ${this.nome}`)
    }
}

const p1 = new Pessoa('Priscila')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`O sobrenome dela será ${nome}`)
    }
}

const p2 = criarPessoa('da Silva')
p2.falar()