// Função que aplica a Cifra de Cesar para descriptografar uma mensagem.
function caesarCipher(str, shift) {
    return str.replace(/[a-z]/gi, c =>
        String.fromCharCode((c.charCodeAt(0) - (c.toLowerCase() < 'a' ? 65 : 97) + shift) % 26 + (c.toLowerCase() < 'a' ? 65 : 97))
    );
}

// Testes de saída:
console.log(caesarCipher('Vguvg', 2)); // Saída: 'Teste'
console.log(caesarCipher('BCDYZAbcdyza', 27)); // Saída: 'ABCXYZabcxyz'
console.log(caesarCipher('Qaiik', 60)); // Saída: 'Isaac'
console.log(caesarCipher('Amozm Iw', 8)); // Saída: 'Segredo'
