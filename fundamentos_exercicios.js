// Exercícios de fundamentos
// Exercício 1: Olá, Mundo!
// Crie um script que imprima "Olá, Mundo!"

console.log("Olá, Mundo!")

// Exercício 2: Converção de tipos
// Dado o valor de uma sring "1234", converta-o em um número e exiba o tipo da variável no console.

let valorString = "1234"
let valorNumero = Number(valorString)

console.log(typeof valorNumero)

// Execício 3: Manipulação de strings
// Dado uma string "JavaScript é incrível", escreva um código que conte quantos caracteres a string tem e quantas palavras existem na frase 

const frase = "JavaScript é incrível"
const numeroDeCaracteres = frase.length
const numeroDePalavras = frase.split(" ").length

console.log(`O número de caracteres é: ${numeroDeCaracteres}`)
console.log(`O número de palavras é: ${numeroDePalavras}`)

// Exercício 4: Loops e Arrays
// Crie um array com cinco nomes. Use um loop for para imprimir cada nome console.

const nomes = ['Yarlley', 'Marcos', 'Danielle', 'Ravena', 'Lídia']

for(let i = 0; i < nomes.length ; i++) {
    console.log(nomes[i])
}

// Exercício 5: Funções, String e Math
// Crie uma função que aceita uma string representando um horário no formato 24 horas (por exemplo, "14:30"). 
// A função deve retornar uma string que converta o horário para o formato de 12 horas (por exemplo, "2:30 PM").
// Use o objeto Math para auxiliar nesta converção. 
//Certifique-se de que sua função lida corretamente com horário na meia-noite e no meio-dia.

function converterHoras(horario24) {
    // 14:20 => hora = 14, minuto = 20 => split(":") => [0] == hora, [1] == minuto
    // const hora = horario24.split(":")[0]
    // const minuto = horario24.split(":")[1]

    const [hora, minuto] = horario24.split(":")

    //  15 / 12 = 3, 23 % 12 = 11
    //  falsy 12 % 12 = 0 => 12
    const hora12 = hora % 12 || 12

    let periodo = "AM"

    if(hora > 12) {
        periodo = "PM"
    }

    console.log(`${hora12}:${minuto} ${periodo}`)
}

converterHoras("15:16")
converterHoras("09:43")
converterHoras("22:34")
