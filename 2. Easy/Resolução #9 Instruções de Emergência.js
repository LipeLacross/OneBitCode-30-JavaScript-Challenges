// Função recursiva que calcula o fatorial de um número sem usar estruturas de repetição.
function recursiveFactorial(n) {
    if (n <= 1) return 1n;
    return BigInt(n) * recursiveFactorial(n - 1);
}

// Testes de saída:
console.log(recursiveFactorial(5)); // Saída: 120n
console.log(recursiveFactorial(0)); // Saída: 1n
console.log(recursiveFactorial(32)); // Saída: 263130836933693530167218012160000000n
console.log(recursiveFactorial(9n)); // Saída: 362880n
