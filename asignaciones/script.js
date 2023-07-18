// Obtener el número ingresado por el usuario
var numero = prompt("Ingrese un número del 1 al 4:");

// Verificar si se ingresó un número o si se canceló el prompt
if (numero === null) {
  alert("Gracias por su visita");
} else {
  // Convertir el número ingresado a entero
  numero = parseInt(numero);

  // Mostrar el nombre de la comida y el precio según el número ingresado
  switch (numero) {
    case 1:
      alert("Has seleccionado: Hamburguesa - Precio: $10");
      break;
    case 2:
      alert("Has seleccionado: Pizza - Precio: $8");
      break;
    case 3:
      alert("Has seleccionado: Ensalada - Precio: $5");
      break;
    case 4:
      alert("Has seleccionado: Sopa - Precio: $4");
      break;
    default:
      alert("El número seleccionado no está en el menú");
      break;
  }
}
