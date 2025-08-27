//Clases
class Person {
  constructor(name, age, alias) {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }
}

//Sintaxis
let p = new Person("Ru", 40, "R");
console.log(p);

console.log(typeof p);

//Valores por defecto

class DefaultPerson {
  constructor(name = "default name", age = 0, alias = "Sin alias") {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }
}

let p1 = new DefaultPerson();
//let p1 = new DefaultPerson((alias = "RR")); //->van por orden, no reconoce la etiqueta
console.log(p1);

//Acceso a propiedades

console.log(p.age);
console.log(p1.alias);

p1.alias = "Puma";
console.log(p1.alias);

//Funciones en clases
class Person2 {
  constructor(name, age, alias) {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }
  walk() {
    console.log("Caminando");
  }
}

let p4 = new Person2("Re", 12, "Ja");
console.log(p4);
p4.walk();

//Propiedades privadas

class PersonPrivate {
  #bank; //->Propiedad privada

  constructor(name, age, alias, bank) {
    this.name = name;
    this.age = age;
    this.alias = alias;
    this.#bank = bank;
  }

  pay() {}
}

let p5 = new PersonPrivate("Jose", 48, "Pepe", "BBVA");
console.log(p5);

p5.bank = "asdas";
console.log(p5); //->Este bank es una propiedad nueva bank, no reemplaza otra

//Getters y setter
class PersonGetSet {
  #name;
  #age;
  #alias;
  #bank;

  constructor(name, age, alias, bank) {
    this.#name = name;
    this.#age = age;
    this.#alias = alias;
    this.#bank = bank;
  }

  get name() {
    return this.#name;
  }

  get bank() {
    return this.#bank;
  }

  set bank(bank) {
    this.#bank = bank;
  }

  pay() {}
}

let p6 = new PersonGetSet("Jose", 48, "Pepe", "IBAN12341234");
console.log(p6.name); // "Jose"
//console.log(p6.#edad); // "Jose"
console.log(p6); // PersonGet {} (pero internamente tiene los #privados)
p6.bank = "ES1231223";
console.log(p6.bank);

//Herencia -> heredar las porpiedades y comportamientos de una clase

class Animal {
  constructor(name) {
    this.name = name;
  }
  //Aqui se deben añadir comportamientos comunes
  sound() {
    console.log("Emite sonido generico");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Guau");
  }
  run() {
    console.log("Corre");
  }
}

class Fish extends Animal {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
  swim() {
    console.log("Nada");
  }
}

let myDog = new Dog("Tom");
myDog.run();
myDog.sound();

let myFish = new Fish("Fish", 10);
myFish.swim();
myFish.sound();

//Metodos estaticos-> Evita crear instancias para usar los metodos estaticos
class MathOperations {
  static sum(a, b) {
    return a + b;
  }
}

//let math = new MathOperations();
//console.log(math.sum(5, 4));
console.log(MathOperations.sum(5, 4));
