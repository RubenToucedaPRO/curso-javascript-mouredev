// 1. Crea una función que reciba dos números y devuelva su suma
function suma(a = 0, b = 0) {
  return a + b;
}

console.log(suma(10, 3));

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
const mayor = function (array = [0]) {
  let max = array[0];
  array.forEach((element) => {
    if (element > max) {
      max = element;
    }
  });
  return max;
};

let miArray = [1, 2, 45, 6, 46, 100, 12, -1];

console.log(mayor(miArray));

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
const funcVocales = (cadena) => {
  i = 0;
  let vocales = new Set(["a", "e", "i", "o", "u"]);
  let nVocales = 0;
  cadena = cadena.toLowerCase();
  while (i < cadena.length) {
    if (vocales.has(cadena[i])) {
      nVocales++;
    }
    i++;
  }
  return nVocales;
};

console.log(funcVocales("Ola don pepito"));

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
const stringToUpperCase = (array) => {
  let newArray = [];
  array.forEach((value) => newArray.push(value.toUpperCase()));
  return newArray;
};
let array = ["Juan", "Pepe", "mariA"];
let newArray = stringToUpperCase(array);
console.log(newArray);

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function esPrimo(a) {
  if (a < 2) return false;
  if (a === 2) return true;
  if (a % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(a); i += 2) {
    if (a % i === 0) return false;
  }

  return true;
}
console.log(esPrimo(2));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
let a1 = [1, 2, 3, 4, 5, 99, 100];
let a2 = [2, 5, 6, 4, 7, 8];

let a3 = (a1, a2) => {
  let a3 = [];
  a1.forEach((n1) => {
    a2.forEach((n2) => {
      if (n1 == n2) {
        a3.push(n1);
      }
    });
  });
  return a3;
};

console.log(a3(a1, a2));

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function returnPares(array) {
  let suma = 0;
  array.forEach((a) => {
    if (a % 2 == 0) {
      suma += a;
    }
  });
  return suma;
}

console.log(returnPares(a1));

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
const elevarAlCuadrado = (array) => array.map((a) => a ** 2);
console.log(elevarAlCuadrado(a1));

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
let cadena = "Ola don pepito";

const invertirCadena = (cad) => {
  let rev = "";
  for (let i = cad.length - 1; i >= 0; i--) {
    rev += cad[i];
  }
  return rev;
};
cadena = invertirCadena(cadena);
console.log(cadena);

// 10. Crea una función que calcule el factorial de un número dado

function calcularFactorial(n) {
  let res = n;
  for (i = n - 1; i > 0; i--) {
    res *= i;
  }
  return res;
}

console.log(calcularFactorial(6));
