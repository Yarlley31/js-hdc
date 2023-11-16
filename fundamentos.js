// Fundamentos
// var nome = "valor"
var  minhaVarivel = 'Olá, mundo!';

console.log(minhaVarivel);

// comentários

/*
Isso 
tudo 
é comentáriooooo
*/

// variáveis e tipos de dados
var meuNumero = 10;

console.log(meuNumero);

console.log(meuNumero + 5);

console.log('10' + 5);

console.log(typeof meuNumero);

var booleano = true; // false

console.log(typeof booleano);

var meuObejeto = {}
var meuArray = []
var meuNull = null
var meuUndefined = undefined

console.log(typeof meuObejeto)
console.log(typeof meuArray)
console.log(typeof meuNull)
console.log(typeof meuUndefined)

// let e const
// novas formas de declarar variáveis
let x = 10
const y = 5

console.log(typeof x)

console.log(x, y)

// operadores aritiméticos
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)

// operadores de comparação
console.log(x == y)
console.log(x != y)

console.log('5' == 5)
console.log('5' === 5)
console.log('5' !== 5)

// operadores lógicos
// AND &&
// OR ||
console.log(10 > 5 && 20 > 5)
console.log(10 > 5 && 20 < 5)
console.log(10 < 5 && 20 < 5)

console.log(10 > 5 || 20 > 5)
console.log(10 > 5 || 20 < 5)
console.log(10 < 5 || 20 < 5)

// Conversão de tipos
const meuNumero2 = '123'

const meuNumeroConvertido = Number(meuNumero2)

console.log(meuNumeroConvertido)
console.log(typeof meuNumeroConvertido)

// Estrutura de condição - if, else, else if

const idade = 16

if(idade < 13) {
    console.log('Criança')
} else if (idade < 20) {
    console.log('Adolesscente')
}else {
    console.log('Adulto')
}

if (false) {
    console.log('isso executa')
} else {
    console.log('Isso vai executar')
}

// Switch
const fruta = 'Mamão'

switch(fruta) {
    case 'Banana':
        console.log('Banana é a fruta!')
        break //tem que colocar break porque senão quando um case for true o switch vai executar todos os cases
    case 'Maçã':
        console.log('Maçã é a fruta')
        break
    default:
        console.log("Fruta não encontrada!")
}

// Estruturas de repetição
// 1, 2, 3, 4, 5, 6... => dependendo de uma condição

// contador, condição de limite, incremento
for(let i = 0; i < 5; i++) {
    // concatenação
    console.log('O valor de i é: ' + i)
}

// while
let k = 0

while(k < 5) {
    console.log('O valor de k: ' + k)
    k++
}

// do while
let j = 0
do {
    console.log('O valor de j é: ' + j)
    j++
} while(j < 5);