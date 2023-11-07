// Questao 1 - O objetivo dessa questao é retornar uma lista de hashes que retornam uma string.



input = [
    {
        name: 'Maria da Silva Campos',
        cpf: 55921021920,
        state: 'Sao Paulo',
        value: '1234'
    },
    {
        name: 'Mickey Tyson Oliveira',
        cpf: 2241721975,
        state: 'Paraiba',
        value: '4450'
    }
]


//Imprima a solucao, lado a lado no console.


const reduceInput = input.reduce((acc, sum) => acc += `${sum.name}${sum.state}${sum.value}\n`, '')

console.log(`${reduceInput}`)


//Questao 2 - O objetivo é que o resultado acima seja uma string que seja configuravel.
























