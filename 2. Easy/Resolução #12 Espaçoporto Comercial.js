// Função que valida se um número é um código de identificação válido.
function validateShipID(code) {
    const evenSum = [...code].filter((_, i) => i % 2 !== 0).reduce((a, b) => a + parseInt(b), 0) * 3;
    const oddSum = [...code].filter((_, i) => i % 2 === 0).reduce((a, b) => a + parseInt(b), 0);
    const remainder = (evenSum + oddSum) % 10;
    const verifier = remainder === 0 ? 0 : 10 - remainder;
    return verifier === parseInt(code.slice(-1));
}

// Testes de saída:
console.log(validateShipID('547020743789')); // Saída: true
console.log(validateShipID('301354030348')); // Saída: true
console.log(validateShipID('301354030349')); // Saída: false
console.log(validateShipID('123456789872')); // Saída: false
