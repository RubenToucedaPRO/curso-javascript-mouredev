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
    if (new.target === Animal) {
      throw new Error("No se puede instanciar una clase abstracta");
    }
    this.name = name;
  }
  makeSound() {
    throw new Error("Este metodo debe ser implementado por la subclase");
  }
}

//error
//const animal = new Animal("Mis");
//console.log(animal);

// - Polimorfismo

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
cat.makeSound();

const dog = new Perro("Tom");
console.log(dog);
dog.makeSound();

// - Mixins

const FlyMixin = {
  fly() {
    console.log("Está volando");
  },
};

class Pajaro extends Animal {}

class Dragon extends Animal {}

//Accediendo al prototype si le asigna al objeto pajaro la propiedad de volar
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
    if (Session.instance) {
      return Session.instance;
    }
    this.name = name;
    Session.instance = this;
  }
}

const sesion1 = new Session("Ru");
const sesion2 = new Session();
console.log(sesion1);
console.log(sesion2);
const sesion3 = new Session("Jose");
console.log(sesion3);

// - Symbol -> mecanismo para simular una propiedad privada pero sabiendo como se llama podemos acceder a ella y modificarla
const ID = Symbol("id");

class User {
  constructor(name) {
    this.name = name;
    this[ID] = Math.random();
  }
  getId() {
    return this[ID];
  }
}

const user = new User("Rubén");
console.log(user.name);
console.log(user.ID); //no puedes acceder a ID porque es como una propiedad privada, si la especificacion de js es anterior a 2020
console.log(user[ID]);

user[ID] = 123;
console.log(user[ID]);

console.log(user.getId());

// - instanceof

class Car {}

const car = new Car();

console.log(car === Car); //No se puede comprobar asi
console.log(car instanceof Car);

// -create
const car2 = Object.create(Car.prototype);
console.log(car2 instanceof Car);

// -proxy: comprobaciones de seguridad y validaciones dentro de la clase

//Lo siguiente es el manejador
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

const account = new Proxy(new BankAccount(100), proxy);
console.log(account.balance);

account.balance = -50;

console.log(account.balance);
