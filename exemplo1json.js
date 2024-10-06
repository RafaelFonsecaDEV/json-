const pessoa = {
    nome: 'joao',
    idade: 25,
    profisao: "desenvolvedor"
}

const pessoajson = JSON.stringify(pessoa)
console.log(pessoa) // ira imprimir no formato objeto
console.log(pessoajson) // ira imprimir no formato json

const pessoaObj = JSON.parse(pessoajson) // convertendo em objeto usando json