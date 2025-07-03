// 1. Crea una clase que reciba dos propiedades
// 2. Añade un método a la clase que utilice las propiedades
// 3. Muestra los valores de las propiedades e invoca a la función
// 4. Añade un método estático a la primera clase
// 5. Haz uso del método estático
class Clase1 {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  fullName() {
    return console.log(this.name, this.surname);
  }
  static medirLongitud(a) {
    console.log(a + 2);
  }
}
let c1 = new Clase1("Clase", 1);
console.log(c1);
console.log(c1.name);
console.log(c1.surname);

c1.fullName();

Clase1.medirLongitud(7);

// 6. Crea una clase que haga uso de herencia
// 10. Sobrescribe un método de una clase que utilice herencia
class Clase2 extends Clase1 {
  fullName() {
    return console.log("Sobreescrito:", this.name, this.surname);
  }
}

let c2 = new Clase2("Clase", 2);
console.log(c2);
c2.fullName();

// 7. Crea una clase que haga uso de getters y setters
// 8. Modifica la clase con getters y setters para que use propiedades privadas
// 9. Utiliza los get y set y muestra sus valores
class Clase3 {
  #name;
  #surname;

  constructor(name, surname) {
    this.#name = name;
    this.#surname = surname;
  }
  get name() {
    return this.#name;
  }
  get surname() {
    return this.#surname;
  }
  set name(name) {
    this.#name = name;
  }
  set surname(surname) {
    this.#surname = surname;
  }
}

let c3 = new Clase3("Clase", 3);
console.log(c3);
c3.name = "CLASE";
c3.surname = 33;
console.log(c3.name, c3.surname);
