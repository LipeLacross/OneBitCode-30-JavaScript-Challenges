// Função que atualiza a lista de classificação durante a corrida.
function updateClassification(list, action) {
    let [name, operation] = action.split(' ');
    const index = list.indexOf(name);
    if (operation.includes('+')) {
        const positions = parseInt(operation.slice(1));
        list.splice(index, 1);
        list.splice(index - positions, 0, name);
    } else if (operation.includes('-')) {
        const positions = parseInt(operation.slice(1));
        list.splice(index, 1);
        list.splice(index + positions, 0, name);
    } else if (operation === 'ELIMINATE') {
        list.splice(index, 1);
        list.push(`${name} ELIMINATED`);
    }
    return list;
}

// Testes de saída:
console.log(updateClassification(['Alfa', 'Beta', 'Gama', 'Delta'], 'Beta +1')); // Saída: ['Beta', 'Alfa', 'Gama', 'Delta']
console.log(updateClassification(['Alfa', 'Beta', 'Gama', 'Delta'], 'Gama -1')); // Saída: ['Beta', 'Alfa', 'Delta', 'Gama']
console.log(updateClassification(['Alfa', 'Beta', 'Gama', 'Delta'], 'Delta ELIMINATE')); // Saída: ['Beta', 'Alfa', 'Gama', 'Delta ELIMINATED']
console.log(updateClassification(['Alfa', 'Beta', 'Gama', 'Delta'], 'Gama +2')); // Saída: ['Gama', 'Beta', 'Alfa', 'Delta ELIMINATED']
