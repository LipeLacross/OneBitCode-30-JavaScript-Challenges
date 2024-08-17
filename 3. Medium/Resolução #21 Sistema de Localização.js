// Função que valida se um nome de usuário atende aos requisitos.
function validateUsername(username, users) {
    const regex = /^[A-Za-z][A-Za-z0-9_]{3,31}$/;
    if (!regex.test(username)) return false;
    if (users.includes(username)) return false;
    return true;
}

// Testes de saída:
console.log(validateUsername('52alfred', ['erick14', 'pamIs2', 'VICTOR99A'])); // Saída: false
console.log(validateUsername('erick14', ['erick14', 'pamIs2', 'VICTOR99A'])); // Saída: false
console.log(validateUsername('josh_g15', ['erick14', 'pamIs2', 'VICTOR99A'])); // Saída: true
console.log(validateUsername('hugo123a', ['erick14', 'pamIs2', 'VICTOR99A'])); // Saída: false
