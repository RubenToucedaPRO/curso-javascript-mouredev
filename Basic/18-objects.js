//Objetos

//Sintaxis
let persona = {
  name: "Pepe",
  edad: 40,
  email: "mail@mail.com",
};

//Acceso a propiedades
//notacion por punto
console.log(persona.edad); //-> Es la usada

//Notacion de corchetes
console.log(persona["name"]);

//Modificacion
persona.name = "Jose";
console.log(persona.name);

console.log(typeof persona.name);
persona.name = 45;
console.log(persona.name);
console.log(typeof persona.name);

//Eliminacion propiedades
delete persona.edad;
console.log(persona);

//Añadir propiedad
persona.alias = "Puma";
console.log(persona);

//Metodos (funciones)
let p2 = {
  name: "Pepe",
  edad: 40,
  email: "mail@mail.com",
  walk: function () {
    console.log("Caminando");
  },
};

p2.walk();

//Anidar objetos
let p3 = {
  name: "Pepe",
  edad: 40,
  email: "mail@mail.com",
  walk: function () {
    console.log("Caminando");
  },
  job: {
    name: "programador",
    exp: 15,
    work: function () {
      console.log("El ", this.name, " trabaja");
    },
  },
};

console.log(p3);
console.log(p3.name);
console.log(p3.job);
p3.job.work();

//Igualdad de objetos
let p4 = {
  name: "Pepe",
  edad: 40,
  email: "mail@mail.com",
};

let p5 = {
  name: "Pepe",
  edad: 40,
  email: "mail@mail.com",
};

console.log(p5, p4);
console.log(p5 == p4);
console.log(p5 === p4);
console.log(p5.name == p4.name);

//Iteracion
for (let key in p4) {
  console.log(key, ": ", p4[key]);
}

//Funciones como objects (Constructor) -> Aunque lo podemos utilizar debemos usarlo en una clase
//como indican los tres puntitos

function Person(name, age) {
  //Deberia ser una clase
  this.name = name;
  this.age = age;
}

let p6 = new Person("Ru", 40);
console.log(p6);
