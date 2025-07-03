//Exportacion de modulos

//Funciones
export function suma(a, b) {
  return a + b;
}

//Propiedades
export const PI = 3.1416;
export let name = "Ruben";

//Exportacion por defecto -> cuando la importas puedes llamarla como quieras que solo hara
//caso de la exportacion por default. Solo puedes exportar una como default.
//export default function hola() {}
//export default class Persona {}
//export default { nombre: "Rubén" };
//export default 123;
//export default "texto";

export default function resta(a, b) {
  return a - b;
}

//Clases
export class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}
