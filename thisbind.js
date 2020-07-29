const pessoa = {
    saudacao: 'bom dia',
    falar(){//usando a funçao para referenciar o this
        console.log(this.saudacao);
    }
}

pessoa.falar()

const falar = pessoa.falar

falar() //conflito de paradigma: funcional e oo

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

