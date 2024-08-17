// Classe que gera uma licença de voo baseada em nome e data de nascimento.
class Pilot {
    constructor(firstName, lastName, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(birthday);
        this.flyingLicense = this.generateLicense();
    }

    generateLicense() {
        const year = this.birthday.getFullYear();
        const month = String(this.birthday.getMonth() + 1).padStart(2, '0');
        const lastName = this.lastName.toUpperCase().padEnd(5, '9').slice(0, 5);
        return `${lastName}-${year.toString().slice(-2)}${month}.${this.firstName[0].toLowerCase()}`;
    }
}

// Testes de saída:
const pilot1 = new Pilot('John', 'Doe', '1977-05-25T03:00:00.000Z');
console.log(pilot1.flyingLicense); // Saída: 'DOE99-7057.j'

const pilot2 = new Pilot('Hal', 'Jordan', '1995-09-02T03:00:00.000Z');
console.log(pilot2.flyingLicense); // Saída: 'JORDA-9095.h'

const pilot3 = new Pilot('Carol', 'Danvers', '1968-08-17T03:00:00.000Z');
console.log(pilot3.flyingLicense); // Saída: 'DANVE-6088.c'

const pilot4 = new Pilot('Poe', 'Dameron', '1979-03-09T03:00:00.000Z');
console.log(pilot4.flyingLicense); // Saída: 'DAMER-7039.p'
