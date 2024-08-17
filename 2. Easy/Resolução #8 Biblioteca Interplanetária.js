// Função que valida se um código tem a mesma quantidade de cada caractere.
function validateCode(code) {
    const charCounts = {};
    for (let char of code) {
        charCounts[char] = (charCounts[char] || 0) + 1;
    }
    const counts = Object.values(charCounts);
    return counts.every(count => count === counts[0]);
}

// Testes de saída:
console.log(validateCode('This is Thee')); // Saída: true
console.log(validateCode('ssd')); // Saída: false
console.log(validateCode('Lorem ipsum')); // Saída: false
console.log(validateCode('QQwweerrttyy')); // Saída: true
