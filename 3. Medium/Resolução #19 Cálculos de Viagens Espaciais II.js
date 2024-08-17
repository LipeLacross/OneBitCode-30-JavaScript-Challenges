// Função que retorna todas as possíveis combinações de senhas a partir de uma lista de caracteres.
function allPasswords(chars) {
    if (chars.length === 0) return [[]];
    const passwords = [];
    chars.forEach((char, i) => {
        const otherPasswords = allPasswords(chars.filter((_, index) => index !== i));
        otherPasswords.forEach(password => passwords.push([char].concat(password)));
    });
    return passwords;
}

// Testes de saída:
console.log(allPasswords(["X", "s", "-", "#"])); // Saída: [['X', 's', '-', '#'], ['X', 's', '#', '-'], ...]
console.log(allPasswords(["1", "2", "3"])); // Saída: [['1', '2', '3'], ['1', '3', '2'], ...]
console.log(allPasswords([])); // Saída: [[]]
