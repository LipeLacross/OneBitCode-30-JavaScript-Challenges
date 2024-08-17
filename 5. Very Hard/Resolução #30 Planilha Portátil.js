// Função para calcular fórmulas de uma planilha.
Spreadsheet.prototype.calculateFormula = function(cells) {
    // Implementação de SUM, SUB, MUL, DIV, MIN, MAX, AVG
    if (cells.includes('SUM')) {
        return cells.reduce((acc, cell) => acc + parseInt(this.readCell(cell)), 0);
    }
    // Outras implementações de fórmulas aqui...
    return 'Fórmula não implementada';
};

// Testes de saída:
const spreadsheet = new Spreadsheet();
spreadsheet.writeCell('A1', '4');
spreadsheet.writeCell('A2', '4');
spreadsheet.writeCell('A3', 'FORMULA(SUM(A1;A2))');
console.log(spreadsheet.readCell('A3')); // Saída: 8 (ou implementação equivalente)
