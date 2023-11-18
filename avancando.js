// Avamcamdo em JavaScript

// Manipulção de arryas
const frutas = ["Maçã", "Laranja"]

frutas.unshift("Acerola") // adiciona um elemento no começo do array

console.log(frutas)

frutas.shift() // apaga o primeiro elemento do array

console.log(frutas)

// map, filter, reduce -> arrow function
const numeros = [1, 2, 3, 4, 5, 6]

// find => retorna o primeiro elemento do críterio
const numeroPar = numeros.find((num) => num % 2 === 0) // Aqui o find tá funcinando como se fosse um for

console.log(numeroPar)

// filter => retorna todos os elementos que batem com o críterio
const numerosPares = numeros.filter((num) => num % 2 === 0)

console.log(numerosPares)

// Manipulação de strings
const frase = " Olá, mundo!  ";

const palavras = frase.trim().split(" ") // remove os espações no começo e fim de strings (erro muito cometidos por usuários);     split(" ") remove todos espações

console.log(frase)
console.log(palavras)

const frase2 = "JavaScript é incrível!"

console.log(frase2.startsWith("Java")) // Para conferir com que palavra começa uma string
console.log(frase2.endsWith("!")) // Para conferir com que palavra (elemento) acaba uma string

// Exceções e tratamentos de erros
const idade = 15

// if(idade < 18) {
//     throw new Error("Você deve ter pelo menos 18 anos!") // Tipo um trava do zap kkk. Ele lança um erro no programa que não deixa você contiuanar programando
// }

try { // O try catch não trava o programa mostra o error para o usuário
    const idade = 15
    if (idade < 18) {
        throw new Error("Você deve ter pelo menos 18 anos!")
    }
} catch (error) {
    console.log(error.message)
}

console.log("Continuando o programa...")

// callback => função
//function cumprimentar(nome, callback) { // 1º função
//    console.log("Olá, " + nome)
//    callback()
//}

//function mostrarSaudacao() { // função de callback
//    console.log("Como você está?")
//}

//cumprimentar("Ceci", mostrarSaudacao) // junção das duas. Chamando a 1º com a 2º no parametro

//cumprimentar("Marian", function() // Mesmo resultado!
//    {console.log("Bem e você?")
//})

// settimeout => depois de um tempo executa algo, uma vez
//function mostrarMensagem() {
//    console.log("Essa mensagem será exibida após 3 segundos.")
//}

// 1000ms == 1s
//setTimeout(mostrarMensagem, 3000)

//setTimeout(function() { // funciona com função anônima também
//    console.log("oi")
//}, 1000)

// promises
const promessa = new Promise((resolve, reject) => {
    const condicao = false

    if(condicao) {
        resolve("A condição é verdadeira!")
    } else {
        reject("A condição é falsa!")
    }
})

promessa
.then((mensagem) => { // pegou quando uma promessa da certo
    console.log(mensagem)
})
.catch((erro) => { // pegou quando a promessa é falsa
    console.log(erro)
})

// Bibliotecas feitas que são "promise based"

const promise1 = Promise.resolve(3)
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2500, "testando")
})

Promise.all([promise1, promise2]).then((valores) => console.log(valores)) // serve para executar quantos promessas quiser (só quando a promessa de maior tempo acabar o tempo)

// Async Await
async function obterValor() { // resumi a sintax ao invés de usar then e catch
    const promessa = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Valor obtido"), 2000)
    })

    const valor = await promessa

    console.log(valor)
}

obterValor()

async function obterValorComError() {
    try {
        const promessa = new Promise((resolve, reject) => {
            setTimeout(() => reject("Valor com erro"), 2000)
        })
    
        const valor = await promessa
    
        console.log(valor)
    } catch (error) {
        console.log(error)
    }
}

obterValorComError()

// JSON (JavaScript Object Notation)
// {mome: "teste"} = {"nome": "teste"}
// Padroniza a comunicação
//front-end e back-end em uma linguagem só
const object = {nome: "João", idade: 30}

const jsonString = JSON.stringify(object)

console.log(jsonString)
console.log(typeof jsonString)

const json = '{"nome": "João", "idade": 30}'

const objeto2 =JSON.parse(json)

console.log(objeto2)