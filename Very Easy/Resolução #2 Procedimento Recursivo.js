/*
Escreva uma função que recebe um número
e retorna uma quantidade equivalente de "chunks" separados por um traço "-"
sem utilizar nenhuma estrutura de repetição (while, dowhile, for, etc).
 */
//Usar recursividade
function chunks(numero) {
    if (numero === 0) {
        return ''
    } else {
        numero -= 1
        return `chunk-${chunks(numero)}`
    }
}
//Math.floor para arrendondar

console.log(chunks(3))