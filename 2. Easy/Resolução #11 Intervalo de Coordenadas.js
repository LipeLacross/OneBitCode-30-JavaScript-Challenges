// Função que calcula quantas moedas são necessárias para atingir um valor.
function countCoins(value) {
    const coins = [500, 100, 25, 10, 5, 1];
    const result = [];
    for (const coin of coins) {
        result.push(Math.floor(value / coin));
        value %= coin;
    }
    return result;
}

// Testes de saída:
console.log(countCoins(478)); // Saída: [0, 4, 3, 0, 1, 3]
console.log(countCoins(384)); // Saída: [0, 3, 3, 0, 1, 4]
console.log(countCoins(5412)); // Saída: [10, 4, 0, 1, 0, 2]
console.log(countCoins(50)); // Saída: [0, 0, 2, 0, 0, 0]
