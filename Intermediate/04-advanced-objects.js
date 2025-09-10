//Objetos avanzados

// - Prototipos y herencia

// Prototipos (a dia de hoy no son habituales)

let person = {
  name: "Ruben",
  age: 40,
  greet: function () {
    console.log(`Hola, soy ${this.name}`);
  },
};

console.log(person.__proto__);
console.log(Object.getPrototypeOf(person));
person.greet();

person.sayAge = function () {
  console.log(`Hola, tengo ${this.age}`);
};
console.log(person);
person.sayAge();

//Herencia -> hereda del objeto
let programmer = Object.create(person);
// Cuando haces Object.create(person), el objeto programmer no tiene ninguna propiedad propia; solo tiene un enlace (un prototipo) a person.
person.name = "Jose";
programmer.language = "JavaScript";
console.log(programmer.name);
programmer.name = "Mar";
console.log(person.name); //No recibe a la inversa las propiedades
console.log(programmer.language);
console.log(person.language);

// - Métodos estáticos y de instancia

function Person(name, age) {
  this.name = name;
  this.age = age;
} //->deprecated, no prodrias crear funciones como greet fuera, habria que hacer de la siguiente manera:

Person.prototype.greet = function () {
  console.log(`Hola, soy ${this.name}`);
};

let newPerson = new Person("Pepe", 50);
console.log(newPerson);
newPerson.greet();

// -Metodos avanzados

// assign

let person_core = { name: "Ruben" };
let person_details = { age: 40, alias: "puma" };

let fullPerson = Object.assign(person_core, person_details);
console.log(fullPerson);

// keys, values, entries

console.log(Object.keys(fullPerson));
console.log(Object.values(fullPerson));
console.log(Object.entries(fullPerson));
