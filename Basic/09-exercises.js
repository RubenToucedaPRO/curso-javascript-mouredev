/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "Ruben";
if (nombre == "Ruben") {
  console.log(nombre);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "admin";
let password = "1234";
if (usuario == "admin" && password == "1234") {
  console.log("Usuario y contraseña correctos");
} else {
  console.log("Usuario o contraseña incorrectos");
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = -5;
if (numero > 0) {
  console.log("El número es positivo");
} else if (numero < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es cero");
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 16;
if (edad >= 18) {
  console.log("Puede votar");
} else {
  console.log(`No puede votar, le faltan ${18 - edad} años`);
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad
let categoria = edad >= 18 ? "adulto" : "menor";
console.log(categoria);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 5;
if (mes >= 3 && mes <= 5) {
  console.log("Primavera");
} else if (mes >= 6 && mes <= 8) {
  console.log("Verano");
} else if (mes >= 9 && mes <= 11) {
  console.log("Otoño");
} else {
  console.log("Invierno");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let dias;
switch (mes) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    dias = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    dias = 30;
    break;
  case 2:
    dias = new Date().getFullYear() % 4 === 0 ? 29 : 28;
    break;
  default:
    dias = 0;
}
console.log(`El mes ${mes} tiene ${dias} días`);

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "es";
switch (idioma) {
  case "es":
    console.log("¡Hola!");
    break;
  case "en":
    console.log("Hello!");
    break;
  case "fr":
    console.log("Bonjour!");
    break;
  default:
    console.log("¡Hola!");
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch (mes) {
  case 3:
  case 4:
  case 5:
    console.log("Primavera");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Verano");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Otoño");
    break;
  default:
    console.log("Invierno");
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (mes) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    dias = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    dias = 30;
    break;
  case 2:
    dias = new Date().getFullYear() % 4 === 0 ? 29 : 28;
    break;
  default:
    dias = 0;
}
console.log(`El mes ${mes} tiene ${dias} días`);
