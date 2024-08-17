// Função que calcula a média aritmética de qualquer número de alunos/turmas.
function calculateAverage(...numbers) {
    const total = numbers.reduce((acc, num) => acc + num, 0);
    return total / numbers.length;
}

// Testes de saída:
console.log(calculateAverage(10, 9, 6, 8, 9, 1, 5, 7)); // Saída: 6.875
console.log(calculateAverage(2, 5, 7, 1, -2)); // Saída: 2.6
console.log(calculateAverage(10, 10, 10, 10, 9)); // Saída: 9.8
console.log(calculateAverage(25, 75)); // Saída: 50
