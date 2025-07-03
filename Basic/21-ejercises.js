// 1. Usa desestructuración para extraer los dos primeros elementos de un array
let a1 = [1, 2, 3];
let [v1, v2] = a1;
console.log(v1);
console.log(v2);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [v01 = 100, v02, v3] = a1;
console.log(v01);

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let p1 = {
  name: "Pepe",
  edad: 40,
  email: "mail@mail.com",
};

let { name, edad } = p1;
console.log(name);
console.log(edad);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let { name: name4, edad: edad4 } = p1;
console.log(name4);
console.log(edad4);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
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

let {
  job: { name: n5, exp: e5 },
} = p3;
console.log(n5);
console.log(e5);

// 6. Usa propagación para combinar dos arrays en uno nuevo
let a61 = [1, 2, 3];
let a62 = [4, 5];

let a63 = [...a61, ...a62];
console.log(a63);

// 7. Usa propagación para crear una copia de un array
let a7 = [...a61];
console.log(a7);

// 8. Usa propagación para combinar dos objetos en uno nuevo
let p8 = {
  name: "Pepe",
  edad: 40,
  email: "mail@mail.com",
};
let job = {
  nameJ: "programador",
  exp: 15,
  work: function () {
    console.log("El ", this.name, " trabaja");
  },
};

p8n = { ...p8, ...job };
console.log(p8n);

// 9. Usa propagación para crear una copia de un objeto
p9 = { ...p8 };
console.log(p9);

// 10. Combina desestructuración y propagación
let { name: n10, ...resto } = p8;
console.log(n10);
console.log(resto);
