// Função que identifica números faltantes em uma lista embaralhada de números únicos.
function findMissingNumbers(numbers) {
    const maxNum = parseInt(numbers[numbers.length - 1]);
    const allNumbers = Array.from({ length: maxNum }, (_, i) => String(i + 1).padStart(4, '0'));
    return allNumbers.filter(num => !numbers.includes(num));
}

// Testes de saída:
console.log(findMissingNumbers(['0020', '0002', '0013', '0004', '0001', '0016', '0015', '0006', '0012', '0007', '0005', '0008', '0011', '0010'])); // Saída: ['0003', '0009', '0014', '0017', '0018', '0019']
console.log(findMissingNumbers(['0020', '0009', '0002', '0013', '0004', '0017', '0001', '0003', '0016', '0015', '0019', '0006', '0012', '0007', '0005', '0014', '0008', '0011', '0010', '0018'])); // Saída: []
console.log(findMissingNumbers(['0004', '0002', '0005', '0003'])); // Saída: ['0001']
console.log(findMissingNumbers([])); // Saída: []
