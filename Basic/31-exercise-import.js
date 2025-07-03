// 4. Importa una función
import { PI } from "./31-exercise-export.js";
import { esPar, Perro } from "./31-exercise-export.js";
console.log(esPar(2));
console.log(esPar(21));

// 5. Importa una constante
console.log(PI);

// 6. Importa una clase
let perro = new Perro("Tom", 2);
console.log(perro);
perro.ladrar();

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
//Solo se puede exportar un elmento como default
import defecto from "./31-exercise-export.js";
console.log(defecto(3));

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
import { calcularMitad, G, Gato } from "./subcarpeta/31-exercise-export.js";
console.log(calcularMitad(4));
console.log(G);
let gato = new Gato("Mis", 4);
console.log(gato);
gato.ruge();
