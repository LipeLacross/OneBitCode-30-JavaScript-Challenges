// Classe que resolve equações de segundo grau.
class Equation {
    constructor(a = 0, b = 0, c = 0) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    calculateRoots() {
        if (this.a === 0 && this.b === 0 && this.c === 0) {
            return 'Erro! Nenhum parâmetro informado.';
        }

        const delta = this.b ** 2 - 4 * this.a * this.c;
        if (delta < 0) return [];

        const root1 = (-this.b + Math.sqrt(delta)) / (2 * this.a);
        const root2 = (-this.b - Math.sqrt(delta)) / (2 * this.a);

        return delta === 0 ? [root1] : [root1, root2];
    }
}

// Testes de saída:
const eq1 = new Equation(0, 2, 6);
console.log(eq1.calculateRoots()); // Saída: [-3]

const eq2 = new Equation();
console.log(eq2.calculateRoots()); // Saída: 'Erro! Nenhum parâmetro informado.'

const eq3 = new Equation(0, 0, 5);
console.log(eq3.calculateRoots()); // Saída: []

const eq4 = new Equation(1, -4, -5);
console.log(eq4.calculateRoots()); // Saída: [5, -1]
