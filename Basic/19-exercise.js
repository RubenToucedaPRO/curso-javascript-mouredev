// 1. Crea un objeto con 3 propiedades
let gato = {
  name: "Mico",
  color: "Negro",
  edad: 2,
};

// 2. Accede y muestra su valor
console.log(gato);

// 3. Agrega una nueva propiedad
gato.alias = "mi";
console.log(gato);

// 4. Elimina una de las 3 primeras propiedades
delete gato.color;
delete gato.name;
delete gato.edad;
console.log(gato);

// 5. Agrega una función e invócala
gato.maulla = function () {
  console.log("Miau");
};
gato.maulla();

// 6. Itera las propiedades del objeto
for (let key in gato) {
  console.log(key, ": ", gato[key]);
}

// 7. Crea un objeto anidado
let gato2 = {
  name: "Mico",
  color: "Negro",
  edad: 2,
  cualidades: {
    c1: "araña",
    c2: "agil",
  },
};

console.log(gato2);

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(gato2.cualidades);

// 9. Comprueba si los dos objetos creados son iguales
let gato3 = {
  name: "Mico",
  color: "Negro",
  edad: 2,
};
let gato4 = {
  name: "Mico",
  color: "Negro",
  edad: 2,
};
console.log(gato3 == gato4);
console.log(gato3 === gato4);

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(gato3.name == gato4.color);
