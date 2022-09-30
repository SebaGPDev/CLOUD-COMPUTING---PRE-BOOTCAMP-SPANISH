// Predicción 1:
//Qué indicará console.log cuando se llame a esta función?.

function myBirthYearFunc() {
  console.log("Nací en" + 1980);
}
// Respuesta = Cuando llamemos a la funcion por consola se mostrara el mensaje "Nací en1980".

//Predicción 2:
/* 
Si necesitáramos enviar un año de nacimiento a la función
 le diríamos a la función "oye, te enviaremos una variable llamada birthYearInput".
 Lo hacemos agregando el nombre de la variable entre paréntesis. 
 Mira a continuación un ejemplo. 
 Entonces, si la variable birthYearInput es 1980 (también conocida como var birthYearInput = 1980),
 y se llama a esta función, ¿qué indicará console.log?.
 */

function myBirthYearFunc(birthYearInput) {
  console.log("Nací en" + birthYearInput);
}

// Respuesta = El console.log mostrara el mensaje "Nací en1980 o el valor que le pasemos por parametro".

// Predicción 3:
// Intentémoslo otra vez. Si var num1 = 10 y var num2 = 20, ¿qué indicaría console.log?

function add(num1, num2) {
  console.log("¡Sumando números!");
  console.log("num1 es: " + num1);
  console.log("num2 es: " + num2);
  var sum = num1 + num2;
  console.log(sum);
}
// El primer console mostrara "!Sumando números!"
// El segundo console mostrara "num1: 10";
// El tercero console mostrara "num2: 20";
// Respuesta = Esta funcion recibe dos variables como parametros que seran usadas para realizar una suma, el ultimo console.log mostrara la suma de las dos variables