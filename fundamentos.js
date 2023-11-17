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

// Funções (serve para salva códigos que queira usar depois)
// function nome (arg1, arg2) { corpo }
function cumprimentar(nome) {
    console.log('Olá ' + nome)
}

// invocação == nome()
cumprimentar('Yarlley');

// escopo de variáveis
let cor = 'azul'; // fora de chaves escopo global

function mostrarCor() {
    let cor = 'verde' // dentro de chaves escopo local

    console.log(cor)
}

console.log(cor)

mostrarCor()

// hoisting == içamento
testeHoisting()

function testeHoisting() {
    console.log('Deu certo!')
}

// arrow function
const testeArrow = () => console.log('Isso também é uma função')

testeArrow();

// truthy e falsy
const minhaVarivel1 = '' // falsy
const minhaVarivel2 = 'algum texto' // truthy

if(minhaVarivel1) {
    console.log('É verdadeiro!')
} else {
    console.log('É falso!')
}

if(minhaVarivel2) {
    console.log('É verdadeiro!');
} else {
    console.log('É falso!');
}

// array, listas
const numeros = [1, 2, 3, 4, 5];

console.log(numeros);

console.log(numeros[0]);

console.log(numeros[2]);

numeros.push(6, 7)

console.log(numeros)

//prototype => OBJETO -> objeto2
// Array => nossos arrays

numeros.pop() // exclui o último número

console.log(numeros)

// strings
const minhaStringNova = 'Olá, Mundo!'

//concatenação == +
const minhaString3 = minhaStringNova + ' Como você está?'

console.log(minhaString3)

// interpolação
const minhaString4 = `${minhaStringNova} Como você esta?`
console.log(minhaString4)

console.log(minhaString4.length) // quantidade de caracteres
console.log(minhaString4[5]) // mostra a caractere de acordo com o índice
console.log(minhaString4.toUpperCase())

// Data e hora
const agora = Date()
console.log(agora)

const natal = new Date(2023, 11, 25)

console.log(natal)

// Math
console.log(Math.PI)

console.log(Math.round(3.4))

console.log(Math.sqrt(16))

console.log(Math.pow(2, 3))

