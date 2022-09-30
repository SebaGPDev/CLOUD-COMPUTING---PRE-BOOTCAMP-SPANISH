/*
 * ¿Cómo sabemos que necesitamos un bucle aquí?
 * ¿Cuál es el punto de partida del bucle?
 * ¿Cuándo debe detenerse el bucle?
 * ¿Cómo sabrá parar?
 * ¿Cuál es el incremento para cada iteración del bucle?
 * ¿Qué variables necesitamos?
 * */

/*
 * ¿Cómo sabemos que necesitamos un bucle aquí?
 * Sabemos que vamos a necesitar un bucle
 * ya que necesitamos que se repita una condicion hasta cierto valor
 */

/*
 * ¿Cuál es el punto de partida del bucle?
 * En este caso tomo el punto de partida 1
 */

/*
 * ¿Cuándo debe detenerse el bucle?
 * Se detendra cuando la condicion se cumpla, en este caso cuando sea menor a 10
 */

/*
 * ¿Cómo sabrá parar?
 * sabra para gracias a la condicion y que hara despues 
 */

/*
 * ¿Cuál es el incremento para cada iteración del bucle?
 * Por cada iteración aumenta con paso 1
*/

/*
 * ¿Qué variables necesitamos?
 * necesitamos una varible que nos servira como contador, otra para la velocidad
 * para usarla con condicional
 * y otra que nos servira para usarlo como indice en el bucle
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
  i % 3 === 0 && velocidad > 9 ? caramelo2++ : false;
}
console.log(`la maquina dio ${caramelo2} caramelos`);
