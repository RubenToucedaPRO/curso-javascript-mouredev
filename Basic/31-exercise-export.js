// 1. Exporta una funcións
export function esPar(a) {
  return a % 2 == 0;
}

// 2. Exporta una constante
export const PI = 3.1416;

// 3. Exporta una clase
export class Perro {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  ladrar() {
    console.log("Guau");
  }
}

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
export default function noEsPar(a) {
  return a % 2 != 0;
}

// 9. Exporta una función, una constante y una clase desde una carpeta
