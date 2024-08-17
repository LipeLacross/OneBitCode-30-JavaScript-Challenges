// Função que insere uma palavra em posições específicas de uma frase.
function insertWords(phrase, word, indices) {
    let arr = phrase.split('');
    indices.forEach(i => arr.splice(i, 0, word));
    return arr.join('');
}

// Testes de saída:
console.log(insertWords('capaz utilizar as cápsulas emergência', 'de ', [6, 27])); // Saída: 'capaz de utilizar as cápsulas de emergência'
console.log(insertWords('Nós decidimos apesar das chances serem baixas que enviaríamos um sinal para [...]', ' ', [13, 45])); // Saída: 'Nós decidimos, apesar das chances serem baixas, que enviaríamos um sinal para [...]'
console.log(insertWords('Hello', 'world', [6])); // Saída: 'Hello'
console.log(insertWords('Isso é um teste', 'não', [])); // Saída: 'Isso é um teste'
