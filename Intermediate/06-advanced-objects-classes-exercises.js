/*
Clase 38 - Objetos y clases avanzados
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=11832
*/

// 1. Agrega una función al prototipo de un objeto
let usuario = {
  nombre: "Ruben",
  // Así es como se agrega una función directamente al prototipo en ES6
  saluda() {
    console.log(`Hola, soy ${this.nombre}`);
  },
};

console.log(usuario);
usuario.saluda();

// 2. Crea un objeto que herede de otro
let admin = Object.create(usuario);
admin.nombre = "Jose";
admin.saluda();

// 3. Define un método de instancia en un objeto

let deportista = {
  nombre: "Abel",

  correr() {
    console.log("Corriendo");
  },
};

deportista.correr();

// 4. Haz uso de get y set en un objeto

let perro = {
  nombre: "Tom",
  edad: "3",

  get nombrePerro() {
    return this.nombre;
  },
  set nombrePerro(n) {
    this.nombre = n;
  },
};

perro.nombrePerro = "Yerry";
console.log(perro.nombrePerro);

// 5. Utiliza la operación assign en un objeto
function correr() {
  console.log("Perro corriendo");
}
var perro2 = Object.assign(perro, { correr });
console.log(perro2);

// 6. Crea una clase abstracta
class Persona {
  constructor(name) {
    if (new.target == Persona) {
      throw new Error("No puedes instanciar esta clase");
    }
    this.name = name;
  }
  saluda() {
    throw new Error("Debes implementar el metodo para usarlo");
  }
}

//let persona = new Persona("Julián");

// 7. Utiliza polimorfismo en dos clases diferentes
class Alumno extends Persona {
  saluda() {
    console.log(`Hola, soy el alumno ${this.name}`);
  }
}

let a = new Alumno("Isidoro");
a.saluda();

class Profesor extends Persona {
  saluda() {
    console.log(`Hola, soy el profesor ${this.name}`);
  }
}

let p = new Profesor("Manuel");
p.saluda();

// 8. Implementa un Mixin

function estaPresente() {
  console.log("Está presente");
}

Object.assign(Alumno.prototype, { estaPresente });

const a1 = new Alumno("Juan");

console.log(a1);
a1.estaPresente();

// 9. Crea un Singleton
class Oficina {
  constructor(name, empleados) {
    if (Oficina.instance) {
      return Oficina.instance;
    }

    this.name = name;
    this.empleados = empleados;
    Oficina.instance = this;
  }
}

const of1 = new Oficina("Gerencia", 4);
const of2 = new Oficina("Administracion", 2);

console.log(of1, of2);

// 10. Desarrolla un Proxy
const handler = {
  get(obj, prop) {
    console.log(`Accediendo a la propiedad ${prop}`);
    return obj[prop];
  },

  set(obj, prop, val) {
    console.log(`Accediendo a modifica la propiedad ${prop}`);
    obj[prop] = val;
    return true;
  },
};

const persona2 = new Alumno("Jose");

const proxy = new Proxy(persona2, handler);

proxy.name = "Marilo";

console.log(proxy.name);
