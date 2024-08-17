// Função que verifica se a distribuição de parênteses, colchetes e chaves é válida.
function validateBrackets(str) {
    const stack = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let i = 0; i < str.length; i++) {
        if (map[str[i]]) {
            stack.push(map[str[i]]);
        } else if (str[i] !== stack.pop()) {
            return false;
        }
    }

    return stack.length === 0;
}

// Testes de saída:
console.log(validateBrackets('((((([(]))))))')); // Saída: false
console.log(validateBrackets('(()(([])([])()()()()[])()((()))(()))')); // Saída: true
