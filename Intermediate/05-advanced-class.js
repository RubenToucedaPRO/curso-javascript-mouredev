// Clases avanzadas

class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  greet() {
    console.log(`Hola, soy ${this.name}`);
  }
}

const person = new Person("Jose", 50);
person.greet();

// Los métodos añadidos dinámicamente solo afectan a esa instancia específica
person.sayAge = function () {
  console.log(`Hola, tengo ${this.age}`);
};
person.sayAge();

//greet() fue definida dentro de la clase, lo que significa que es un método del prototipo.
// Todos los objetos creados a partir de la clase Person heredan el método greet,
// pero no lo tienen como una propiedad propia. Por ello, no lo muestran en el console.log de person
console.log(person);

//Clase abstracta

class Animal {
  constructor(name) {
    // new.target detecta si se está instanciando directamente la clase Animal
    if (new.target === Animal) {
      throw new Error("No se puede instanciar una clase abstracta");
    }
    this.name = name;
  }
  // Método que obliga a las subclases a implementarlo
  makeSound() {
    throw new Error("Este metodo debe ser implementado por la subclase");
  }
}

//error
//const animal = new Animal("Mis");
//console.log(animal);

// - Polimorfismo
// Cada subclase implementa el mismo método de forma diferente
class Gato extends Animal {
  makeSound() {
    console.log("Miau");
  }
}

class Perro extends Animal {
  makeSound() {
    console.log("Guau");
  }
}

const cat = new Gato("Miau");
console.log(cat);
cat.makeSound(); // Salida: "Miau"

const dog = new Perro("Tom");
console.log(dog);
dog.makeSound(); // Salida: "Guau"

// - Mixins

const FlyMixin = {
  fly() {
    console.log("Está volando");
  },
};

class Pajaro extends Animal {}

class Dragon extends Animal {}

// Añade métodos del mixin al prototipo de la clase
//Accediendo al prototype le asigna al objeto pajaro la propiedad de volar
Object.assign(Pajaro.prototype, FlyMixin);

const bird = new Pajaro("Pio");
console.log(bird);
bird.fly();

const dragon = new Dragon("Fuego");
console.log(dragon);
//dragon.fly();

// - Patrón singleton -> aseguras que solo exista una instancia de la clase definida como singleton

class Session {
  constructor(name) {
    // Si ya existe una instancia, devuelve esa en lugar de crear una nueva
    if (Session.instance) {
      return Session.instance;
    }
    this.name = name;
    Session.instance = this;
  }
}

const sesion1 = new Session("Ru");
const sesion2 = new Session(); // Devuelve la misma instancia que sesion1
console.log(sesion1);
console.log(sesion2); // Misma referencia en memoria
const sesion3 = new Session("Jose"); // Devuelve la misma instancia que sesion1
console.log(sesion3); // Misma referencia en memoria

// - Symbol -> mecanismo para simular una propiedad privada pero sabiendo como se llama podemos acceder a ella y modificarla
//// Crea una propiedad "pseudo-privada" (única e irrepetible)
const ID = Symbol("id");

class User {
  constructor(name) {
    this.name = name;
    this[ID] = Math.random(); // Propiedad "privada"
  }
  getId() {
    return this[ID]; // Método para acceder a la propiedad privada
  }
}

const user = new User("Rubén");
console.log(user.name);
console.log(user.ID); //no puedes acceder a ID porque es como una propiedad privada, si la especificacion de js es anterior a 2020
console.log(user[ID]); // Acceso correcto al Symbol

user[ID] = 123; // Modificación directa del Symbol
console.log(user[ID]);

console.log(user.getId()); // Método público para obtener el ID

// - instanceof

class Car {}

const car = new Car();

console.log(car === Car); // false - comparas instancia con clase
console.log(car instanceof Car); // true - verifica herencia/prototipo

// -create
// Crea un objeto con el prototipo especificado
const car2 = Object.create(Car.prototype);
console.log(car2 instanceof Car); // true - tiene el mismo prototipo

// -proxy: te permite interceptar y personalizar el comportamiento de operaciones sobre objetos. Es como tener un "intermediario" que controla el acceso a un objeto.

//- Handler: define qué operaciones interceptar
const proxy = {
  get(target, property) {
    //cuando hagas una operacion de obtencion de balance se va a ejecutar este get
    console.log(`Se accede a la propiedad ${property}`);
    return target[property];
  },
  set(target, property, value) {
    //cuando hagas una operacion de setear el balance se ejecutara esta
    if (property === "balance" && value < 0) {
      throw new Error(`El ${property} no puede ser negativo`);
    }
    target[property] = value;
  },
};

class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }
}
// Crea un proxy que envuelve la instancia de BankAccount
const account = new Proxy(new BankAccount(100), proxy);
console.log(account.balance); // Muestra mensaje de acceso

// account.balance = -50; // Descomentar para ver el error de validación

console.log(account.balance);
