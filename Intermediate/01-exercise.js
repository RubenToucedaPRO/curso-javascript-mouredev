// 1. Crea una función que retorne a otra función
function sum(a, b, c) {
  return a + b + c;
}

function calcularSuma() {
  return sum;
}

const operacion = calcularSuma();
console.log(operacion(1, 2, 3));

// 2. Implementa una función currificada que multiplique 3 números
function mult(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}
const multiplicacion = mult(2);
console.log(multiplicacion(3)(4));

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

function calculoPotencia(a, b) {
  if (b === 0) {
    return 1;
  }
  if (b === 1) {
    return a;
  }
  return a * calculoPotencia(a, b - 1);
}
console.log(calculoPotencia(2, 2));

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
function createCounter(init) {
  let counter = init;
  return {
    increment() {
      counter++;
    },
    decrement() {
      counter--;
    },
    getValue() {
      return counter;
    },
  };
}

const count = createCounter(10);
console.log(count.getValue());
count.increment();
console.log(count.getValue());
count.decrement();
count.decrement();
console.log(count.getValue());

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
function sumManyTimes(multiplier, ...numbers) {
  let suma = 0;
  for (let index = 0; index < numbers.length; index++) {
    suma += numbers[index];
  }
  console.log(suma * multiplier);
}

sumManyTimes(2, 1, 2, 3);

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
function funcion6(callback, ...n) {
  const result = suma(...n);
  callback(result);
}
function suma(...n) {
  let suma = 0;
  for (let index = 0; index < n.length; index++) {
    suma += n[index];
  }
  return suma;
}
function funcionCallback(n) {
  console.log("La suma es: " + n);
}

funcion6(funcionCallback, 1, 2, 3, 4);

// 7. Desarrolla una función parcial
function funcionParcial(iva) {
  return (valor) => {
    return valor + (iva * valor) / 100;
  };
}
const calculoPVP = funcionParcial(21);
console.log(calculoPVP(10));
console.log(calculoPVP(100));

// 8. Implementa un ejemplo que haga uso de Spread
function funcion8(...n) {
  let suma = 0;
  for (let i = 0; i < n.length; i++) {
    suma += n[i];
  }
  return suma;
}

console.log(funcion8(1, 2, 3, 4, 5));

// 9. Implementa un retorno implícito
const var9 = (a, b) => a + b;

console.log(var9(2, 3));

// 10. Haz uso del this léxico
const persona = {
  name: "ruben",
  getName: () => {
    console.log("Nombre: " + this.name);
  },
};

persona.getName();
