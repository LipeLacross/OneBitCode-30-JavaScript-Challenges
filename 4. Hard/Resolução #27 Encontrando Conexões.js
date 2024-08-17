const fs = require('fs');

// Classe que simula o funcionamento de uma planilha.
class Spreadsheet {
    constructor() {
        this.cells = {};
    }

    readCell(name) {
        return this.cells[name] || '';
    }

    writeCell(name, value) {
        if (value.startsWith('FORMULA')) {
            const formula = value.match(/FORMULA\((.*)\)/)[1];
            const cells = formula.split(/[,;]/);
            this.cells[name] = this.calculateFormula(cells);
        } else {
            this.cells[name] = value;
        }
    }

    calculateFormula(cells) {
        // Implementar lógica para fórmulas como SUM, SUB, MUL, DIV, MIN, MAX, AVG
        return 'Implementar lógica';
    }

    saveFile(name) {
        fs.writeFileSync(`${name}.json`, JSON.stringify(this.cells));
    }

    openFile(name) {
        this.cells = JSON.parse(fs.readFileSync(`${name}.json`));
    }
}

// Testes de saída:
const sheet = new Spreadsheet();
sheet.writeCell('A1', '4');
sheet.writeCell('A2', '4');
sheet.writeCell('B1', '0');
sheet.writeCell('B2', '3');
console.log(sheet.readCell('A1')); // Saída: '4'
console.log(sheet.readCell('B2')); // Saída: '3'

sheet.saveFile('testSheet');
sheet.openFile('testSheet');
console.log(sheet.readCell('A1')); // Saída: '4' (conteúdo carregado do arquivo)
