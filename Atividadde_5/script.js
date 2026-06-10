
function calculadoraSomar(){
    let numero1 = prompt("Digite o primeiro numero");
    let numero2 = prompt("Digite o segundo numero");
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    return numero1 + numero2;
}
function calculadoraSubstrair(){
    let numero1 = prompt("Digite o primeiro numero");
    let numero2 = prompt("Digite o segundo numero");
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    return numero1 - numero2;
}
function calculadoraMultiplicar(){
    let numero1 = prompt("Digite o primeiro numero");
    let numero2 = prompt("Digite o segundo numero");
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    return numero1 * numero2;
}
function calculadoraDividir(){
    let numero1 = prompt("Digite o primeiro numero");
    let numero2 = prompt("Digite o segundo numero");
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    return numero1 / numero2;
}

const somar = calculadoraSomar();
const substrair = calculadoraSubstrair();
const multiplicar = calculadoraMultiplicar();
const dividir = calculadoraDividir();

console.log(somar);
console.log(substrair);
console.log(multiplicar);
console.log(dividir);

