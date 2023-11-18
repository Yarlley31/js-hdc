// Exercício de Manipulação de Array

// Crie uma lista de compras que é inicialmente vazia.
// Adicione 5 itens à lista usando push().
// Agora, remova o primeiro item da lista usando shift().
// Imprima a lista final no console.

let listaDeCompras = []

listaDeCompras.push("Carne", "Maçãs", "Caderno", "Frango", "Arroz")
listaDeCompras.shift()

console.log(listaDeCompras)

// Exercício de Manipulção de array - find()

// Você tem um array de números: [3, 7, 14, 21, 39, 36, 42]
// Use a função find() para encontar o primeiro número que divísivel por 7
// e maior que 10

const numeros = [3, 7, 14, 21, 39, 36, 42]

const numeroDivisivelPor7 = numeros.find((num) => num % 7 === 0 && num > 10)

console.log(numeroDivisivelPor7)


// Exercício de Manipulação de Array - filter()

// Dado o array de números: [5, 10, 15, 20, 25, 30, 35, 40]
// Use a função filter() para criar um novo array que contenha apenas os
// que são maiores que 20.

let numeros1 = [5, 10, 15, 20, 25, 30, 35, 40]
const numero = numeros1.filter((num) => num > 20)

console.log(numero)


// Exercício de Manipulação de String - split(), trim()

// Dado a string: " Bom dia, mundo! ".
// Remova os espaços em branco no início e no final da string.
// E em seguida, divida a string em palavras.

const frase = " Bom dia, mundo! "
const palavras = frase.trim().split(" ")

console.log(palavras)


// Exercício de Manipulação de String - startWith(), endsWith()
// Dado a string: "O rato roeu a roupa do rei de Roma".
// Verifique se a string começa com a palavra "O" e termina com a palavra "Roma".

const frase2 = "O rato roeu a roupa do rei de Roma"
const comecaCom = frase2.startsWith("O")
const terminaCom = frase2.endsWith("Roma")

console.log(comecaCom)
console.log(terminaCom)
