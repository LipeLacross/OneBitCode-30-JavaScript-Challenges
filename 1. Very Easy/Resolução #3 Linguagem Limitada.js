// Função que cria uma quantidade de "chunks" separados por hífen de forma recursiva.
function createChunks(n) {
    if (n === 1) return "chunk";
    return "chunk-" + createChunks(n - 1);
}

// Testes de saída:
console.log(createChunks(4)); // Saída: "chunk-chunk-chunk-chunk"
console.log(createChunks(1)); // Saída: "chunk"
console.log(createChunks(8)); // Saída: "chunk-chunk-chunk-chunk-chunk-chunk-chunk-chunk"
console.log(createChunks(2)); // Saída: "chunk-chunk"
