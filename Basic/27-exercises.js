// 1. Crea un función que utilice error correctamente

function func1(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    console.log(a + b);
  } else {
    console.error("Esta funcion solo admite numeros");
  }
}

let res = func1(1, "a");
let res1 = func1(1, 2);

// 2. Crea una función que utilice warn correctamente
function func2(a) {
  if (a & 1) {
    console.warn("No es par");
    return;
  }
  console.log("Es par");
}
let res2 = func2(21);

// 3. Crea una función que utilice info correctamente
function func3(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    console.info("Operacion realizada");
    return a + b;
  }
  console.error("Esta funcion solo admite numeros");
}

let res3 = func3(21, 3);

// 4. Utiliza table
data = [
  { name: "Ruben", age: 40 },
  { name: "Alba", age: 28 },
];
console.table(data);

// 5. Utiliza group
let name = "ruben";
let age = 40;
console.group("Usuario");
console.log(name);
console.log(age);
console.groupEnd();

// 6. Utiliza time
console.time("time1");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("time1");

// 7. Valida con assert si un número es positivo
let a7 = -1;
console.assert(a7 >= 0, "Es positivo");

// 8. Utiliza count
for (let i = 0; i < 5; i++) {
  console.count("Click");
}

// 9. Utiliza trace
function a() {
  b();
}

function b() {
  c();
}

function c() {
  console.trace("Traza desde c");
}

a();

// 10. Utiliza clear
console.clear();
