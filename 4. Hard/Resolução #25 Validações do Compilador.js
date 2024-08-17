// Classe que gerencia informações sobre exploradores em um jogo.
class Explorer {
    constructor(name) {
        this.name = name;
        this.level = 1;
        this.experience = 0;
        this.exploredPlanets = [];
        this.dead = false;
    }

    explore(planet) {
        if (this.dead) return;

        const dice = Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
        let success = false;

        if (planet.hostility === 'peaceful' && dice >= 5) success = true;
        else if (planet.hostility === 'neutral' && dice >= 7) success = true;
        else if (planet.hostility === 'hostile' && dice >= 9) success = true;

        if (success) {
            this.exploredPlanets.push(planet);
            this.gainExperience(planet.hostility);
        } else if (dice === 2 && planet.hostility === 'hostile') {
            this.dead = true;
        }
    }

    gainExperience(hostility) {
        const points = hostility === 'peaceful' ? 15 : hostility === 'neutral' ? 25 : 50;
        this.experience += points;

        const levelUpPoints = 100 + this.level * 10;
        if (this.experience >= levelUpPoints) {
            this.level++;
            this.experience -= levelUpPoints;
        }
    }
}

// Testes de saída:
const explorer1 = new Explorer('John');
explorer1.explore({ id: 1, name: 'Planet 1', hostility: 'neutral', terrain: 'forest' });
console.log(explorer1.level, explorer1.experience); // Saída depende do resultado da exploração
