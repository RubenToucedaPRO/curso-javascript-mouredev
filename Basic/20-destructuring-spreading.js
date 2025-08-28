//Desestructuracion: pasar de parametros de objetos por ejemplo a variables sueltas

//Sintaxis arrays
let a1 = [1, 2, 3, 4];

let [v1, v2] = a1;
console.log(v1, ", ", v2);

//Sintaxis arrays con valores predeterminados
let [v01 = 0, v02, v3, v4, v5, v6 = 0] = a1;
console.log(v01);
console.log(v02);
console.log(v3);
console.log(v4);
console.log(v5);
console.log(v6);

//Ignorar elementos array
[, , v3, v4] = a1;
console.log(v3);
console.log(v4);

//Sintaxis objects ->el nombre de la variable desestructurada tiene que coincidir con el nombre de la propiedad del objeto
let p = {
  name: "Pepe",
  edad: 40,
  email: "mail@mail.com",
};

let { name, edad, email } = p; //->En un objeto es con llaves
console.log(name);
console.log(edad);
console.log(email);

//Sintaxis de objetos pero con valores predeterminados
let { alias = "alias" } = p;
console.log(alias);

console.log(p);

//Sintaxis objects pero con nuevos nombres de variables
let { name: name2 } = p;
console.log(name2);

//Objetos anidados
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
  name: name3, //name de p3 pasa a ser name 3
  job: { name: jobName },
} = p3;
console.log(name3);
console.log(jobName);

//Spreading (propagacion)(...)-> crea una copia de un array
let a2 = [...a1];
console.log(a2);

let a3 = [...a1, 5, 6];
console.log(a3);

let a4 = [...a2, ...a3];
console.log(a4);

//Spreading objects
let p4 = { ...p, alias: "pera" };
console.log(p4);

let p5 = p4; //-> esto lo vincula el uno al otro
p5.name = "kaka";
console.log(p4);
