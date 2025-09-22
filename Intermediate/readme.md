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

```js
const greet2 = funcion("Rubén", 40);

greet2("Rubén", 40); //Hola, Jose y 40 de edad
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

## Asincronia
Función declarada como async, automáticamente hace que esa función devuelva una promesa, aunque tú no la crees explícitamente.
```js
// Función normal - devuelve lo que le digas
function normal() {
  return "hola";
}
console.log(normal()); // "hola" (string)

// Función async - devuelve siempre una promesa
async function asincrona() {
  return "listo";
}
console.log(asincrona()); // Promise {<fulfilled>: "listo"} (¡es una promesa!)
```
Async en el siguiente caso es necesario para que retorne una promesa. Esto permite que la función se ejecute de forma asíncrona sin bloquear el hilo principal
```js
async function esperar() {
  return "listo";
}

// Por eso puedes hacer:
const promesa = esperar(); // promesa es una Promise
promesa.then(resultado => console.log(resultado)); // "listo"

// O usar await:
const resultado = await esperar(); // "listo"
```

Una promesa en JavaScript es un objeto que representa la eventual finalización (o falla) de una operación asíncrona y su valor resultante.

Características principales:
 Estado: Una promesa puede estar en uno de estos estados:
 ** Pendiente (Pending): La operación aún no se ha completado ni fallado.
 ** Cumplida (Fulfilled): La operación se completó con éxito. La promesa contiene un valor resultante.
 ** Rechazada (Rejected): La operación falló. La promesa contiene un motivo de error.
 Inmutabilidad del estado: Una vez que una promesa se cumple o se rechaza, su estado y valor (o motivo de rechazo) no pueden cambiar

 Métodos de manejo:
  .then(onFulfilled, onRejected): Se ejecuta cuando la promesa se cumple (onFulfilled) o se rechaza (onRejected).
  .catch(onRejected): Se ejecuta específicamente cuando la promesa se rechaza.
  .finally(onFinally): Se ejecuta siempre, independientemente del resultado final.

  ```js
  // Crear una nueva promesa
const miPromesa = new Promise((resolve, reject) => {
  // Simular una operación asíncrona (como una solicitud de red o un temporizador)
  const exito = true; // Esta sería la lógica real de tu operación

  if (exito) {
    // Si la operación asíncrona tiene éxito, llamamos a resolve con el valor resultante
    resolve("¡Operación completada con éxito!");
  } else {
    // Si la operación falla, llamamos a reject con el motivo del error
    reject(new Error("Algo salió mal"));
  }
});

// Consumir la promesa
miPromesa
  .then((resultado) => {
    // Este bloque se ejecuta si la promesa se cumple
    console.log("Éxito:", resultado);
  })
  .catch((error) => {
    // Este bloque se ejecuta si la promesa se rechaza
    console.error("Error:", error.message);
  })
  .finally(() => {
    // Este bloque se ejecuta siempre al final, opcional
    console.log("Operación finalizada (éxito o error).");
  });
  ```