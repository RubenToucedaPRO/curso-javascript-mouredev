//Console

//log
console.log("Ola");

//error
console.error("Este es un mensaje de error");
console.error("Error al conectar:", new Error("Conexion fallida"));

//warn
console.warn("Este es una advertencia");

//info
console.info("Informacion");

//table
let data = [
  ["Brais", 37],
  ["Sara", 24],
];
console.table(data);

let data1 = [
  { name: "Brais", edad: 37 },
  { name: "Sara", edad: 24 },
];
console.table(data1);

//group
console.group("Usuario");
console.log("Nombre: Ruben");
console.log("Edad: 40");
console.groupEnd();

//time
console.time("Tiempo de ejecucion 2");
console.time("Tiempo de ejecucion");
for (let i = 0; i < 10000; i++) {}
console.timeEnd("Tiempo de ejecucion 2");
for (let i = 0; i < 10000; i++) {}
console.timeEnd("Tiempo de ejecucion"); //->Tiene que tener el mismo texto que el inicio

//assert
let age = 17;
console.assert(age >= 18, "El usuario debe ser mayor de edad");

//count
console.count("Click");
console.count("Click");
console.count("Click");
console.countReset("Click");
console.count("Click");

//trace
function funcA() {
  funcB();
}

function funcB() {
  console.trace("Seguimiento de la ejecucion");
}

funcA();

//clear
//console.clear();
