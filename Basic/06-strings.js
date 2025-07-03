//Strings
let myName = "Ru";
let greeting = "Ola, " + myName + "!";

console.log(greeting);

//Longitud
console.log(greeting.length);

//Acceso a caracteres
console.log(greeting[2]);

//Metodos comunes
console.log(greeting.toLocaleUpperCase());
console.log(greeting.toLocaleLowerCase());
console.log(greeting.indexOf("Ru")); //Indice donde ha encntrado la palabra Inidicado
console.log(greeting.includes("Ru")); //Indica si incluye la cadena
console.log(greeting.slice(0, 4));
console.log(greeting.replace("Ru", "Ruben"));

//Template literals (Plantillas literales) -> interporar variables
let message = `Ola que
tal
estas`;

console.log(message);

console.log(`Ola, ${myName}`); //-> Importante emplear las comillas invertidas
