// Classe abstrata
class Veiculo {
    constructor(marca, modelo) {
        if (new.target === Veiculo) {
            throw new TypeError("Não é possível instanciar a classe abstrata 'Veiculo' diretamente.");
        }
        this.marca = marca;
        this.modelo = modelo;
    }

    mostrarDetalhes() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
}

// Classe herdeira Carro
class Carro extends Veiculo {
    constructor(marca, modelo, portas) {
        super(marca, modelo);
        this.portas = portas;
    }

    mostrarDetalhes() {
        super.mostrarDetalhes();
        console.log(`Portas: ${this.portas}`);
    }
}

// Classe herdeira Moto
class Moto extends Veiculo {
    constructor(marca, modelo, cilindrada) {
        super(marca, modelo);
        this.cilindrada = cilindrada;
    }

    mostrarDetalhes() {
        super.mostrarDetalhes();
        console.log(`Cilindrada: ${this.cilindrada}cc`);
    }
}

// Criando instâncias
let carro1 = new Carro("Toyota", "Corolla", 4);
let carro2 = new Carro("Fiat", "Uno", 2);
let moto1 = new Moto("Honda", "CB500", 500);

// Exibindo detalhes das instâncias
carro1.mostrarDetalhes();
carro2.mostrarDetalhes();
moto1.mostrarDetalhes();
