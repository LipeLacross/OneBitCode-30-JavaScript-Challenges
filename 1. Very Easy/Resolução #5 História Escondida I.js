// Função que encontra a maior letra em ordem alfabética de cada palavra em uma string.
function largestLetter(str) {
    return str.split(' ').map(word => word.split('').sort().reverse()[0]).join('');
}

// Testes de saída:
console.log(largestLetter('Lorem ipsum dolore sec avanti')); // Saída: 'v'
console.log(largestLetter('Hello')); // Saída: 'o'
console.log(largestLetter('May the force be with you')); // Saída: 'y'
console.log(largestLetter('Its over nine thousand')); // Saída: 'v'
