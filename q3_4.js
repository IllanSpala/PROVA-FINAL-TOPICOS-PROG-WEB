//ILLAN SPALA 2022201138
class Produto{
    constructor(nome, modelo, marca, dataFabricacao, dataValidade, preco, qtd){
        this.nome = nome;
        this.modelo = modelo;
        this.marca = marca;
        this.dataFabricacao = dataFabricacao;
        this.dataValidade = dataValidade;
        this.preco = preco;
        this.qtd = qtd;
    }
}

class Eletronico extends Produto{
    constructor(nome, modelo, marca, dataFabricacao, dataValidade, preco, qtd, consumoMedioEnergia, tipo){
        super(nome, modelo, marca, dataFabricacao, dataValidade, preco, qtd);
        this.consumoMedioEnergia = consumoMedioEnergia;
        this.tipo = tipo;
        }
    calcularValorImposto(percentualLucro){
        return this.preco * 0.035 + this.preco * 0.073 + (this.preco * percentualLucro);
    }
}
    
class Alimentacao extends Produto{
    constructor(nome, modelo, marca, dataFabricacao, dataValidade, preco, qtd, qtdUnitaria, tipo){
       super(nome, modelo, marca, dataFabricacao, dataValidade, preco, qtd);
        this.qtdUnitaria = qtdUnitaria;
        this.tipo = tipo;
    }
    calcularValorImposto(percentualLucro){
        if(this.tipo === 'agropecuario'){
            return this.preco * 0.045 + (this.preco * 0.017 * this.qtdUnitaria) + (this.preco * percentualLucro);
        } else if(this.tipo === 'industrial'){
            return this.preco * 0.045 + (this.preco * 0.072) + (this.preco * percentualLucro);
        }
    }
}

const eletronico1 = new Eletronico('Smartphone', 'Galaxy S21', 'Samsung', '2021-01-29', '2023-01-29', 5000, 10, 15, 'video');
const alimentacao1 = new Alimentacao('Arroz', 'Tipo 1', 'Camil', '2022-01-01', '2023-01-01', 20, 100, 1, 'agropecuario');

const eletronico2 = new Eletronico('Maxon 808', 'Maxon 808', 'Maxon', '2020-01-01', '2025-01-01', 15000, 5, 30, 'audio');
const alimentacao2 = new Alimentacao('Feijão', 'Tipo 1', 'Camil', '2022-01-01', '2023-01-01', 10, 200, 1, 'industrial');

console.log(`Valor do imposto para o eletrônico: R$ ${eletronico1.calcularValorImposto(0.2).toFixed(2)}`);
console.log(`Valor do imposto para a alimentação: R$ ${alimentacao1.calcularValorImposto(0.2).toFixed(2)}`);

console.log(`Valor do imposto para o eletrônico: R$ ${eletronico2.calcularValorImposto(0.2).toFixed(2)}`);
console.log(`Valor do imposto para a alimentação: R$ ${alimentacao2.calcularValorImposto(0.2).toFixed(2)}`);
