// Função que calcula o valor na sequência de Fibonacci em uma posição específica.
function fibonacci(n) {
    if (n === 0) return 0n;
    if (n === 1) return 1n;

    let a = 0n, b = 1n;

    for (let i = 2; i <= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}

// Testes de saída:
console.log(fibonacci(0)); // Saída: 0n
console.log(fibonacci(2n)); // Saída: 1n
console.log(fibonacci(7)); // Saída: 13n
console.log(fibonacci(144n)); // Saída: 555565404224292694404015791808n
