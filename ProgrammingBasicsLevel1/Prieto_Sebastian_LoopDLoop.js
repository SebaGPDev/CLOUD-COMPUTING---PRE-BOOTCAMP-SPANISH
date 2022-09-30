/*
 * Sabemos que vamos a necesitar un bucle
 * ya que necesitamos que se repita una condicion hasta cierto valor
 */

/**
 * En este caso tomo el punto de partida 1
 */

/**
 * Se detendra
 */

let caramelo = 0;
for (let i = 1; i < 10; i++) {
  i % 3 === 0 ? caramelo++ : false;
}

console.log(`la maquina dio ${caramelo} caramelos`);

// Característica Stretch 1
/*
 * Crea un nuevo bucle en el que el corredor
 * solo reciba un caramelo cada 3 kilómetros Y
 * si se desplaza a más de 9 kilómetros por hora.
 */

var caramelo2 = 0;
var velocidad = 10;
for (var i = 1; i < 10; i++) {
  i % 3 === 0 && velocidad > 9 
  ? caramelo2++ 
  : false;
}
console.log(`la maquina dio ${caramelo2} caramelos`);