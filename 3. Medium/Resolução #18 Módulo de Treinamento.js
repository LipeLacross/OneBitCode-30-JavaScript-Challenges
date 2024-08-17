// Função que calcula a persistência multiplicativa de um número.
function multiplicativePersistence(num) {
    let times = 0;
    while (num > 9) {
        num = String(num).split('').reduce((acc, val) => acc * val);
        times++;
    }
    return times;
}

// Testes de saída:
console.log(multiplicativePersistence(539)); // Saída: 3
console.log(multiplicativePersistence(999)); // Saída: 4
console.log(multiplicativePersistence(7)); // Saída: 0
console.log(multiplicativePersistence(7169)); // Saída: 5
