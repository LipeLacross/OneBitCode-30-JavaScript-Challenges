/*
Escreva uma função que recebe um número qualquer de números inteiros como argumentos e retorne a média aritmética entre eles.
 */
function media1(numeros) {
    let soma = 0;
    let contador = numeros.length;

    for (let i of numeros) {
        soma += i;
    }

    let resultado = soma / contador;
    return resultado;
}

lista = [1, 2, 3];
console.log(media1(lista));

function media2(...numeros) {
    let soma = 0;
    let contador = numeros.length;

    for (let i = 0; i < contador; i++) {
        soma += numeros[i];
    }

    let resultado = soma / contador;
    return resultado;
}

console.log(media2(2, 4, 6));
/*
Os três pontos indica que voce não deseja criar uma nova posição na lista1
e inserir o array da lista2, mas por pegar todos os dados da lista1 
e empilhar na lista2
 */