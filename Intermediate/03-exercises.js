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
console.log(array4.sort((x, y) => y - x));

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
const set1 = new Set([1, 2, 3, 4]);
const set2 = new Set([11, 3, 24, 2]);
const union = new Set([...set1, ...set2]);
console.log(union);
const interseccion = new Set([...set1].filter((x) => set2.has(x)));
console.log(interseccion);
const diferencia = new Set([...set1].filter((x) => !set2.has(x)));
console.log(diferencia);

// 6. Itera los resultados del ejercicio anterior
union.forEach((x) => console.log(x));
interseccion.forEach((x) => console.log(x));
diferencia.forEach((x) => console.log(x));

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos
const usuarios = new Map([
  [
    "ruben@gmail.com",
    {
      Nombre: "Rubén",
      Edad: 40,
      Email: "ruben@gmail.com",
    },
  ],
  [
    "alba@gmail.com",
    {
      Nombre: "Alba",
      Edad: 29,
      Email: "alba@gmail.com",
    },
  ],
  [
    "pepe@gmail.com",
    {
      Nombre: "Pepe",
      Edad: 9,
      Email: "pepe@gmail.com",
    },
  ],
]);

usuarios.forEach((x) => console.log(x));

// 8. Dado el mapa anterior, crea un array con los nombres
const nombresUsuarios = [...usuarios.values()].map((x) => x.Nombre);
console.log(nombresUsuarios);

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
const mailsMayoresEdad = [...usuarios.values()]
  .filter((x) => x.Edad >= 18)
  .map((x) => x.Email);
console.log(mailsMayoresEdad);
const setMailsMayoresEdad = new Set(mailsMayoresEdad);
console.log(mailsMayoresEdad);

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave edad de cada usuario y como valor todos los datos del usuario
const objeto = Object.fromEntries(usuarios);
console.log(objeto);

const mapa = new Map(Object.entries(objeto).map(([, usu]) => [usu.Edad, usu]));
console.log(mapa);
