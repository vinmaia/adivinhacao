const aleatorio = Math.floor(Math.random() * 100);

console.log("Adivinhe o número de 1 à 100");

let jogarNovamente = ""
let numero = "";
let i = 1;
const tentativasTotais = 3;

process.stdin.on("data", function (data) {
  numero = data.toString().trim();
  if (i == 3 && numero != aleatorio) {
    console.log("Você atingiu o limite de tentativas.");
    console.log("O número era:" + aleatorio);
    jogarNovamente = Number(data.toString().trim())
process.exit();
  } else {
    if (numero == aleatorio) {
      console.log("Parabéns, você acertou!");
      jogarNovamente = Number(data.toString().trim())

    } else {
        if (Math.abs(numero - aleatorio) < 100 * 0.1) {
      console.log("Está perto! Você tem " + (tentativasTotais - i) + " tentativas.");
      
    } else {
      console.log("Passou longe! Você tem " + (tentativasTotais- i) + " tentativas.");
    }
}}
      i++
});