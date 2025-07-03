// 9. Exporta una función, una constante y una clase desde una carpeta
// función
export function calcularMitad(a) {
  return a / 2;
}

//constante
export const G = 9.8;

// clase
export class Gato {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  ruge() {
    console.log("Miau");
  }
}
