// Função que eleva ao quadrado cada dígito de um número e concatena os resultados.
function squareDigits(number) {
    return parseInt(String(number).split('').map(n => n * n).join(''));
}

// Testes de saída:
console.log(squareDigits(3514)); // Saída: 925116
console.log(squareDigits(94571)); // Saída: 811625494
console.log(squareDigits(24)); // Saída: 416
console.log(squareDigits(745821698)); // Saída: 4916256441368164
