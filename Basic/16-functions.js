//Funciones
//console.log -> log es una funcion
function myFunction() {
  console.log("Mi funcion");
}

myFunction();

//Con parametros

function myFunctionWithParams(name) {
  console.log(`Ola ${name}`);
}

myFunctionWithParams("ruben");

//Funciones anonimas -> La funcion no tiene nombre, tenemos que asignarla a una variable
const myFunc2 = function (name) {
  console.log(`Ola ${name}`);
};

myFunc2("Ruben");

//Arrow functions
const myFuncArrow = (name) => {
  console.log(`Ola ${name}`);
};

myFuncArrow("Pepe");
//Arrow function sin scope
const myFuncArrow2 = (name) => console.log(`Ola ${name}`);

myFuncArrow("Jose");

//Parametros
function sum(a, b) {
  console.log(a + b);
}

sum(5, 10);

//Valores por defecto
function defaultSum(a = 0, b = 0) {
  console.log(a + b);
}
defaultSum();
defaultSum(5);
defaultSum((b = 10));

//Retorno de valores
function returnSum(a = 0, b = 0) {
  return a + b;
}

console.log(returnSum(1, 2));

//Funciones anidadas
function extern() {
  console.log("Funcion externa");
  function intern() {
    console.log("Funcion interna");
  }
  intern();
}

extern();
//intern(); -> Error: fuera del scope

//Funciones de orden superior -> son funciones que reciben otras funciones como argumentos
function applyFunc(func, param) {
  func(param);
}

applyFunc(myFunc2, "Jose");

//forEach
let myArray = [1, 2, 3, 4, 5];
myArray.forEach((value) => console.log(value));

mySet = new Set(["123456", 2, 3, "ola"]);
mySet.forEach((value) => console.log(value));

let myMap = new Map([
  ["name", "Ruben"],
  ["email", "correo@correo.com"],
  ["edad", 40],
]);
myMap.forEach((value) => console.log(value));
