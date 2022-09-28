const saludar = () => {
  let nombre = prompt("Ingrese su nombre");
  let tiempo = new Date();
  let ahora = tiempo.toLocaleTimeString();
  nombre === "Count Dooku"
    ? alert("¡Voy por ti, Dooku!")
    : alert(`¡Buen día, ${nombre} ${ahora}`);
};

saludar();
