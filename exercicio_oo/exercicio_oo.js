class Animal {
    constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    }

    emitirSom() {
    throw new Error('Este método deve ser implementado nas subclasses');
    }
}

class Cachorro extends Animal {
    constructor(nome, idade, raca) {
    super(nome, idade);
    this.raca = raca;
    }

    emitirSom() {
    console.log(`${this.nome} diz: Au Au!`);
    }
}

class Gato extends Animal {
    constructor(nome, idade, cor) {
    super(nome, idade);
    this.cor = cor;
    }

    emitirSom() {
    console.log(`${this.nome} diz: Miau!`);
    }
}

const cachorro1 = new Cachorro("Rex", 5, "Labrador");
const gato1 = new Gato("Mimi", 3, "Cinza");
const cachorro2 = new Cachorro("Thor", 2, "Bulldog");

cachorro1.emitirSom(); 
gato1.emitirSom();     
cachorro2.emitirSom(); 

console.log(cachorro1);
console.log(gato1);
console.log(cachorro2);
