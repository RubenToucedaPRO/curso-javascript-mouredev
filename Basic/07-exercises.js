// 1. Concatena dos cadenas de texto
let saludo = "Ola";
let nome = "Ru";
console.log(saludo + nome);

// 2. Muestra la longitud de una cadena de texto
console.log(saludo.length);

// 3. Muestra el primer y último carácter de un string
console.log(saludo[0]);
console.log(saludo.at(-1));

// 4. Convierte a mayúsculas y minúsculas un string
console.log(saludo.toUpperCase());
console.log(nome.toLocaleLowerCase());

// 5. Crea una cadena de texto en varias líneas
console.log(`Ola
que tal
estas`);

// 6. Interpola el valor de una variable en un string´
console.log(`Ola ${nome}`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let frase = "Ola que tal estas";
console.log(frase.replaceAll(" ", "-"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(frase.includes("que"));

// 9. Comprueba si dos strings son iguales
console.log(saludo == nome);

// 10. Comprueba si dos strings tienen la misma longitud
console.log(saludo.length == nome.length);
