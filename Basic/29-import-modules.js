//Importacion modulos ->
//con node se puede convertir los ficheros donde esta la funcion y donde la queremos
//importar a .mjs y ya podemos usar la funcion
//Otra opcion es crear el package.json para indicar que estamos trabajando con modulos y asi
//ya no es necesario cambiar a mjs los ficheros
//EL package.json indica que el proyecto usa módulos ECMAScript (ESM) en lugar del sistema de
// módulos CommonJS (CJS) que usa Node.js por defecto.

//Funciones
import { Circle, suma } from "./28-export-modules.js";
import restita from "./28-export-modules.js";

console.log(suma(1, 2));

//Constante
import { PI } from "./28-export-modules.js";
console.log(PI);
import { name } from "./28-export-modules.js";
console.log(name);

//Importacion por defecto
console.log(restita(4, 2));

//Importacion de clases
let circulo = new Circle(10);
console.log(circulo);
console.log(circulo.area().toFixed(2));

//Proyecto modular
//import { MyClass } from "directorio";

//Modulos externos
//const os = require("os"); //Es de node
import os from "os";
console.log(os.platform());
