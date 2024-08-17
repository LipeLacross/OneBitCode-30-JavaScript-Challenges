// Função que procura por todas as ocorrências de "aid" e "label" dentro de objetos "connection" e "connections".
function findConnections(obj) {
    let results = [];
    for (let key in obj) {
        if (key === 'connection' || key === 'connections') {
            if (Array.isArray(obj[key])) {
                obj[key].forEach(subObj => results.push([subObj.aid, subObj.label]));
            } else {
                results.push([obj[key].aid, obj[key].label]);
            }
        } else if (typeof obj[key] === 'object') {
            results = results.concat(findConnections(obj[key]));
        }
    }
    return results;
}

// Testes de saída:
const exampleData = {
    connections: [
        { aid: '619459086b56da1078d3cf62', label: 'pariatur' },
        { aid: '6194590847e29864f074fd6b', label: 'minim' }
    ],
    connection: { aid: '6194590836eff3460e579dea', label: 'ad' }
};
console.log(findConnections(exampleData)); // Saída: [['619459086b56da1078d3cf62', 'pariatur'], ['6194590847e29864f074fd6b', 'minim'], ['6194590836eff3460e579dea', 'ad']]
