# Funciones Avanzadas en JavaScript

## Ciudadanos de primera clase

Las funciones en JavaScript son **ciudadanos de primera clase**, lo que significa que pueden almacenarse en variables, pasarse como argumentos a otras funciones, y devolverse desde funciones como cualquier otro dato.
```js
function greet(name, age) {
  console.log(`Hola, ${name} y ${age} de edad`);
}
```

### Ejemplo funcion almacenada en variable:
```js
const varGreet = greet("Rubén", 40);

greet("Rubén", 40); //Hola, Jose y 40 de edad
```

### Ejemplo función dentro de una función y pasar por parametros la funcion

Una función puede recibir otra función como argumento y ejecutarla.

```js
function processGreeting(greetFunction, name, age) {
  greetFunction(name, age);
}
processGreeting(greet, "Jose", 40); //Hola, Jose y 40 años de edad
```

### Ejemplo función que retorna otra función
Una función puede devolver otra función, manteniendo el contexto (closure).

```js
function returnGreeting() {
  return greet;
}

const greet2 = returnGreeting();
greet2("Juan", 60); //Hola, Juan y 60 años de edad
```

## Arrow Functions Avanzadas

### Retorno implícito

```js
const multiply = (a, b) => a * b;
console.log(multiply(2, 3));
```

### this léxico

- ✅ **Arrow functions no tienen su propio `this`.**
- 🚫 **No usan el objeto que las contiene como `this`.**
- 🔁 **Capturan el `this` léxico (del lugar donde se declararon).**
- 🔁 **Recordatorio**: Las arrow functions no deben usarse como métodos de objetos si necesitas usar this que apunte al propio objeto.

```js
const handler = {
  name: "Brais",
  greeting: function () {
    console.log(`Hola, ${this.name}`);
  },
  arrowGreeting: () => {
    console.log(`Hola, ${this.name}`); // `this` no apunta a handler aquí porque `this` viene del lugar donde fue definida (window o module)
  },
};

handler.greeting();       // Hola, Brais
handler.arrowGreeting();  // Hola, undefined
```

## IIFE (Funciones Invocadas Inmediatamente)

Funciones que se ejecutan en el momento en que se definen.

```js
(function () {
  console.log("IIFE clásico"); //IIFE clásico
})();

(() => {
  console.log("IIFE con arrow function"); //IIFE con arrow function
})();
```

## Parámetros Rest (...)
El operador **Rest (`...`)** permite representar un número indefinido de argumentos como un **array**. Se utiliza principalmente en la definición de funciones.

```js
function sum(b, ...numbers) {
  let res = 0;
  for (let number of numbers) {
    res += number;
  }
  return res + b;
}
console.log(sum(10, 1, 2, 3, 4, 5)); // 25
```

## Operador Spread (...)

El operador **Spread (`...`)** permite **expandir** los elementos de un iterable (como un array o string) en elementos individuales. Es lo opuesto al operador Rest.


```js
function sumWithSpread(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
console.log(sumWithSpread(...numbers)); // 6
```

## Closures (Clausuras)
Una función que recuerda su entorno léxico donde fue creada, permitiendo acceder a variables externas aun cuando la función externa haya terminado.

```js
function createCounter() {
  let counter = 0;
  return function () {
    counter++;
    console.log("Contador:", counter);
  };
}

const counter = createCounter();
counter(); // Contador: 1
counter(); // Contador: 2
```

## Recursividad
Una función que se llama a sí misma.

```js
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
```

## Funciones parciales
Las **funciones parciales** permiten dividir una función con varios parámetros en una secuencia de funciones más simples. Se utiliza para fijar uno o más argumentos iniciales y devolver una nueva función que espera el resto de los argumentos.

### ✅ Ventajas:
- Reutilización de lógica con diferentes valores.
- Mejora la legibilidad cuando se usan valores comunes.

```js
function partialSum(a) {
  return function (b, c) {
    return sum(a, b, c);
  };
}

const sumWith = partialSum(4);
console.log(sumWith(2, 3)); // suma(4,2,3)
```

### Ejemplo práctico:

```js
function calcularPrecio(iva) {
  return function (precio) {
    return precio + (iva / 100) * precio;
  };
}

const calcPrice = calcularPrecio(21);
console.log(calcPrice(10)); // 12.1
```

## Currying
Transformar una función que recibe varios parámetros en una secuencia de funciones que reciben un parámetro cada una.

```js
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
console.log(sumC(4)); // suma(1,2,3,4)
console.log(sumAB(4)(5)); // suma(1,2,4,5)
```

## Callbacks
Funciones que se pasan como argumentos a otras funciones para ejecutar código después de una operación.

```js
function processData(data, callback) {
  const result = sum(...data);
  callback(result);
}

function processResult(result) {
  console.log(result);
}

processData([1, 2, 3], processResult);
processData([1, 2, 3], (result) => {
  console.log("El resultado es:", result);
});
```