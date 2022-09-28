/**
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

console.log(`la maquina dio ${caramelo} caramelos`)