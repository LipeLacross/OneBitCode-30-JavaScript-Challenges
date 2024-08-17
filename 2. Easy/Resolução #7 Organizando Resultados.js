// Função que abrevia o nome completo de um autor para o formato usado na biblioteca.
function abbreviateName(fullName) {
    const names = fullName.split(' ');
    const lastName = names.pop().toUpperCase();
    const initials = names.map(name => name.charAt(0).toUpperCase() + '.');
    return `${lastName}, ${initials.join(' ')}`;
}

// Testes de saída:
console.log(abbreviateName('Isaac Larrubia Ferreira Pontes')); // Saída: 'PONTES, I. L. F.'
console.log(abbreviateName('John Ronald Reuel Tolkien')); // Saída: 'TOLKIEN, J. R. R.'
console.log(abbreviateName('christopher james paolini')); // Saída: 'PAOLINI, C. J.'
console.log(abbreviateName('Suzanne Marie Collins')); // Saída: 'COLLINS, S. M.'
