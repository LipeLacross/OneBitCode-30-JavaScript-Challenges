// Função que retorna todas as coordenadas abaixo de um ponto (x, y) ordenadas.
function coordinatePairs(x, y) {
    const coords = [];
    for (let i = 0; i <= x; i++) {
        for (let j = 0; j <= y; j++) {
            coords.push([i, j]);
        }
    }
    return coords;
}

// Testes de saída:
console.log(coordinatePairs(2, 2)); // Saída: [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]]
console.log(coordinatePairs(2, 7)); // Saída: [[0, 0], [0, 1], [0, 2], ..., [2, 7]]
console.log(coordinatePairs(-3, -3)); // Saída: []
console.log(coordinatePairs(7, 6)); // Saída: [[0, 0], [0, 1], [0, 2], ..., [7, 6]]
