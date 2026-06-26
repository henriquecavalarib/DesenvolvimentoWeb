
// function calculadoraSomar(){
//     let numero1 = prompt("Digite o primeiro numero");
//     let numero2 = prompt("Digite o segundo numero");
//     numero1 = parseInt(numero1);
//     numero2 = parseInt(numero2);
//     return numero1 + numero2;
// }
// function calculadoraSubstrair(){
//     let numero1 = prompt("Digite o primeiro numero");
//     let numero2 = prompt("Digite o segundo numero");
//     numero1 = parseInt(numero1);
//     numero2 = parseInt(numero2);
//     return numero1 - numero2;
// }
// function calculadoraMultiplicar(){
//     let numero1 = prompt("Digite o primeiro numero");
//     let numero2 = prompt("Digite o segundo numero");
//     numero1 = parseInt(numero1);
//     numero2 = parseInt(numero2);
//     return numero1 * numero2;
// }
// function calculadoraDividir(){
//     let numero1 = prompt("Digite o primeiro numero");
//     let numero2 = prompt("Digite o segundo numero");
//     numero1 = parseInt(numero1);
//     numero2 = parseInt(numero2);
//     return numero1 / numero2;
// }

// const somar = calculadoraSomar();
// const substrair = calculadoraSubstrair();
// const multiplicar = calculadoraMultiplicar();
// const dividir = calculadoraDividir();

// console.log(somar);
// console.log(substrair);
// console.log(multiplicar);
// console.log(dividir);

// let livro = {
//     titulo: "Harry Potter",
//     autor: "Henrique Barros",
//     anoDePublicacao: 1880
// }
// console.log(`${livro.titulo} era meu livro preferido, seu autor ${livro.autor} lançou o primeiro livro no ano ${livro.anoDePublicacao}`);

// var array = [1, 2, 3, 4, 5];
// var primeiroArray = array[0];
// var ultimoArray = array[array.length-1];
// let soma = primeiroArray + ultimoArray;

// console.log(soma);

let aluno = {
    nome: "Polones Boca de Cueca",
    idade: 19,
    notas: [8, 8, 0]
}
let soma = 0;
let aprovado = false;

for(let i = 0; i < aluno.notas.length; i++){
    soma += aluno.notas[i];
}
let media = soma / aluno.notas.length;
if(media >= 7){
    aprovado = true;
    console.log(`
    Nome:${aluno.nome}
    Aprovado:${aprovado}
    Média:${media}`);
}else{
    aprovado = false;
    console.log(`
    Nome:${aluno.nome}
    Aprovado:${aprovado}
    Média:${media}`);
}

