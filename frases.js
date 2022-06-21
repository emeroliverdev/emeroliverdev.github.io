const data = require('./data');
const { frases } = data;

const frasePrint = frases[Math.floor(Math.random() * frases.length)]

console.log(frasePrint.Frase, frasePrint.Autor);