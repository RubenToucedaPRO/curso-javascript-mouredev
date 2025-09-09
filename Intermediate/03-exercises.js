/*
Clase 23 - Estructuras avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=7514
*/

// 1. Array: Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
const array = [1000, 3000, 8000];

console.log(array.map((x) => x + 1));

console.log(array.filter((x) => x > 1000));

let reduce = array.reduce((a, b) => a + b);
console.log(reduce);

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
const arrayN = [2, 3, 10, 5, 9, 1];
const arrayN2 = arrayN.map((x) => Math.pow(x, 3));
console.log(arrayN2);

console.log(arrayN2.filter((x) => x % 2 == 0));

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
const factura = [
  { linea: 1, productos: ["Leche", "Huevos", "Pan"] },
  { linea: 2, productos: ["Tomates", "Patatas"] },
  { linea: 3, productos: ["Yogures"] },
];

const map3 = factura.map((x) => x.productos);
console.log(map3.flat());
console.log(factura.flatMap((x) => x.productos));

// 4. Ordena un array de números de mayor a menor
const array4 = [2, 4, 1, 10, 30, 3];
console.log(array4.map((x, y) => x - y));
console.log(array4.sort((x, y) => x - y));
// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos

// 6. Itera los resultados del ejercicio anterior

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos

// 8. Dado el mapa anterior, crea un array con los nombres

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario
