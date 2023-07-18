//ejercicio 1

let num1 = [2, 4, 6, 8, 10];

let cuadrados = num1.map(numero => numero * numero);

console.log(cuadrados);

//ejercicio 2

let nombres = ['Juan', 'María', 'Carlos', 'Ana', 'Pedro', 'Luisa'];

let nombresMasLargos = nombres.filter(nombre => nombre.length > 5);

console.log(nombresMasLargos);

//ejercicio 3
let num2 = [10, 25, 83, 41, 5];

let suma = num2.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(suma);

