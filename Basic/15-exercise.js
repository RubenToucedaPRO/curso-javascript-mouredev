// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let res = 0;
for (let i = 1; i <= 100; i++) {
  res += i;
}
console.log(`Ex 2 resultado: ${res}`);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 1; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let array = ["Juan", "Jose", "Mar", "Alba"];
let i = 0;
while (i < array.length) {
  console.log(array[i]);
  i++;
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let cadena = "Ola don pepito";
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
console.log(`Vocales en ${cadena}: ${nVocales}`);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let arrayN = [1, 2, 3, 4, 5, 6];
i = 1;
res = arrayN[0];
while (i < arrayN.length) {
  res *= arrayN[i];
  i++;
}
console.log(`Resultado multiplicar numeros array: ${res}`);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
i = 1;
do {
  console.log(`5 x ${i} = ` + 5 * i);
  i++;
} while (i <= 10);

// 8. Usa un bucle para invertir una cadena de texto
let invertida = "";
i = cadena.length;
do {
  i--;
  invertida += cadena[i];
} while (i > 0);
console.log(invertida);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let i1 = 0;
let i2 = 1;
console.log("1º: " + i1);
console.log("2º: " + i2);
for (let i = 2; i < 10; i++) {
  let aux = i1 + i2;
  console.log(`${i + 1}º: ${aux}`);
  i1 = i2;
  i2 = aux;
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
arrayN = [1, 2, 20, 10, 11, 3, 4, 30];
let arrayNuevo = [];
i = 0;
while (i < arrayN.length) {
  if (arrayN[i] > 10) {
    arrayNuevo.push(arrayN[i]);
  }
  i++;
}
console.log(arrayNuevo);
