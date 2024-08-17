// Função que converte números romanos para inteiros decimais.
function romanToDecimal(roman) {
    const values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let total = 0, lastValue = 0;

    for (let i = roman.length - 1; i >= 0; i--) {
        const currentValue = values[roman[i]];
        total += currentValue < lastValue ? -currentValue : currentValue;
        lastValue = currentValue;
    }

    return total;
}

// Testes de saída:
console.log(romanToDecimal('XLVII')); // Saída: 47
console.log(romanToDecimal('CDXXXVIII')); // Saída: 438
console.log(romanToDecimal('CMIX')); // Saída: 909
console.log(romanToDecimal('MMMCMXCIX')); // Saída: 3999
