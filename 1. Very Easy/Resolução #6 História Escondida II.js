// Função que organiza uma matriz bidimensional em uma lista única ordenada.
function sortMatrix(matrix) {
    return [].concat(...matrix).sort((a, b) => a - b);
}

// Testes de saída:
console.log(sortMatrix([[1, 5, 3], [6, 19, 11], [47, 128, 5], [1, 93, 57, 42, 103]])); // Saída: [1, 1, 3, 5, 5, 6, 11, 19, 42, 47, 57, 93, 103, 128]
console.log(sortMatrix([[1, 3], [4, 8], [7, 5], [2, 6]])); // Saída: [1, 2, 3, 4, 5, 6, 7, 8]
console.log(sortMatrix([[], [], [], []])); // Saída: []
console.log(sortMatrix([[100, 50], [60, 100], [20, 100, 70], [10, 40, 80, 90]])); // Saída: [10, 20, 40, 50, 60, 70, 80, 90, 100, 100, 100]
