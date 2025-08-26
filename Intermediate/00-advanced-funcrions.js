//Funciones avanzadas

//Ciudadanos de primera clase-> las funciones pueden almacenarse,
// pasarse y devolverse como cualquier otro dato.
console.log(`Ciudadanos primera clase`);
function greet(name, age) {
  console.log(`Hola, ${name} y ${age} de edad`);
}

//1->Asignarse a una variable
console.log("Asignarse a una variable");
const varGreet = greet("Rubén", 40);

// 2 - Funcion dentro de una funcion y pasar por parametros la funcion
console.log(`Funcion dentro de una funcion`);
function processGreeting(greetFuntion, name, age) {
  greetFuntion(name, age);
}
processGreeting(greet, "Jose", 40);

// 3 - Una funcion podria retornar otra funcion
console.log(`Funcion que retorna otra funcion`);
function returnGreeting() {
  console.log("Ejecutando funcion return->");
  return greet;
}

const greet2 = returnGreeting();
greet2("Juan", 60);

//* -------------------------------------- */
//Arrow funtcions advanced
// Las arrow functions son una forma más concisa de escribir funciones en JavaScript.
// No tienen su propio `this`, por lo que no se pueden usar como métodos de objetos
// y no pueden ser usadas como constructores (no se pueden usar con `new`).
// Tienen un retorno implícito si no se usa llaves `{}` y se escribe
// una sola expresión en el cuerpo de la función.

// 1 -con retorno implicito
console.log(`Arrow function advanced con retorno implicito`);
const multiply = (a, b) => a * b;
console.log(multiply(2, 3));

// 2 - this léxico
console.log(`Arrow function advanced con this lexico`);
let name = "Jorgeeee";
const obj = {
  name: "Rubén",
  normal: function () {
    console.log(this.name); // "Rubén", porque `this` apunta al `obj`
  },
  arrow: () => {
    const name = "Jorgito";
    console.log(this.name); // `undefined`, porque `this` viene del contexto global
    // y no del objeto `obj`, en el navegador sería `window.name`
    // En Node.js sería `global.name`
    console.log(name);
  },
};

obj.normal(); // Rubén
obj.arrow(); // undefined

/* ------------------------ */
//IIFE - > (funcion invocada inmediatamente) -> No son habituales
// - IIFE clasico: Son necesarios los ; para delimitar el contexto de esta con respecto al codigo anterior
console.log(`IFE`);
(function () {
  console.log("IIFE clasico");
})();

(() => {
  console.log("IIFE con arrow function");
})();

//Parametros Rest (...)-> Son los tres puntos seguido de la variable
//Convierte en un array los valores que pasamos, tiene que ser el ultimo de los parametros a pasar
console.log(`Parametros Rest`);
function sum(b, ...numbers) {
  let res = 0;
  for (let number of numbers) {
    res += number;
  }
  return res + b;
}
console.log(sum(10, 1, 2, 3, 4, 5));
console.log(sum(10, 1, 2));

//Operador spread(...)-> Para expandir los elementos de n array a la hora de pasarlos como parametros
//Se usa para pasar un array como si fueran varios parametros. Resumen: Desempaquetar un array
console.log(`Operador spread`);
function sumWithSpread(a, b, c) {
  return a + b + c;
}

console.log(sumWithSpread(1, 2, 3)); //Sin Spread
const numbers = [1, 2, 3];
console.log(sumWithSpread(...numbers)); //Con Spread

//Closures (Clausuras)-> una closure es una función que recuerda el entorno léxico en el
//que fue creada, permitiendo acceder a variables de su función contenedora incluso
//después de que esta haya terminado su ejecución.
console.log(`Clousures`);
function createCounter() {
  let counter = 0;
  return function executeCounter() {
    counter++;
    console.log("Contador:", counter);
  };
  executeCounter();
}

const counter = createCounter();
counter();
counter();

const counter2 = createCounter();
counter2();
counter2();

//Recursividad-> funcion que se llama a si misma
console.log(`Recursividad`);

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));

//Funciones parciales -> dividir una funcion con varios parametros en varias
//Una funcion que no cambia y una parte que si -> teniendo dos funciones podemos hacer esto
console.log(`Funciones parciales`);
function partialSum(a) {
  return function (b, c) {
    return sum(a, b, c);
  };
}

const sumWith = partialSum(4);
console.log(sumWith(2, 3));
console.log(sumWith(1, 2));

function calcularPrecio(iva) {
  return function (precio) {
    return (iva / 100) * precio + precio;
  };
}

const calcPrice = calcularPrecio(21);
console.log(calcPrice(10));

//Currying -> Transformar una funcion que recibe varios parametros en una secuencia de
//funciones con un parametro cada vez
console.log(`Currying`);
function currySum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return sum(a, b, c, d);
      };
    };
  };
}

const sumAB = currySum(1)(2);
const sumC = sumAB(3);
//Ejemplo sumando paso a paso
console.log(sumC(4));

//Ejemplo sumando dos funciones en una linea
console.log(sumAB(4)(5));

//Ejemplo sin completar función
//console.log(sumAB(2));

//Callbacks -> son funciones que se pasan como argumentos a otras funciones
// y se ejecutan después de que la función principal haya terminado su tarea.
console.log(`Callbacks`);
function processData(data, callback) {
  const result = sum(...data);
  callback(result);
}

//  Funcion callback
function funcionCallback(result) {
  console.log(`Mi resultado es:`, result);
}

processData([1, 2, 3], funcionCallback);

//Funcion callback con funcion anonima.
processData([1, 2, 3], (result) => {
  console.log("El resultado es:", result);
});
