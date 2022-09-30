alert("Bienvenido al parque!");
let altura = parseInt(prompt("Ingrese su altura:"));
let edad = parseInt(prompt("Ingrese su edad:"));

const app = (altura, edad) => {
  altura > 52 || edad > 10
    ? alert("¡Súbete, chico!")
    : alert("Lo siento, chico. Tal vez el próximo año");
};

app(altura, edad);