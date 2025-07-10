// 1. Crea una función que retorne a otra función
function sum(a, b) {
  return a + b;
}

function calcSum() {
  return sum;
}

const calcule = calcSum();
let res = calcule(2, 3);
console.log(res);

// 2. Implementa una función currificada que multiplique 3 números
function multiplier(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

const calcule2 = multiplier(2);
const calcule2a = calcule2(3)(4);
console.log(calcule2a);

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
function calcEsponential(a, b) {
  if (b < 1) {
    return 1;
  }
  return a * calcEsponential(a, b - 1);
}
console.log(calcEsponential(2, 2));

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

// 7. Desarrolla una función parcial

// 8. Implementa un ejemplo que haga uso de Spread

// 9. Implementa un retorno implícito

// 10. Haz uso del this léxico
