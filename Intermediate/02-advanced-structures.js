//Estructuras avanzadas

//Arrays avanzados

// - Métodos funcionales

// foreach

let numbers = [1, 2, 3, 4, 5];

numbers.forEach((element) => console.log(element));

// map -> devuelve un nuevo array

let numbers2 = numbers.map((element) => element * 10);
numbers2.forEach((element) => console.log(element));

// filter

let numbers3 = numbers.filter((element) => element % 2 == 0);
numbers3.forEach((element) => console.log(element));

// reduce -> reducirlo todo a un unico valor

let sumNumbers = numbers.reduce((previous, current) => previous + current);
console.log(sumNumbers);

// - Manipulacion

// flat ->  aplanar un array flat(profundidad)

let nestedArray = [1, [2, [3, [4]]]];

let flatArray = nestedArray.flat(3);
console.log(flatArray);

// flatMap -> convinacion de flat y map
//Si aplicas .map((phrase) => phrase.split(" ")), obtienes [["Hola", "mundo"], ["Adios", "mundo"]]
let phrases = ["Hola mundo", "Adios mundo"];
let phrasesUp = phrases.flatMap((phrase) => phrase.split(" "));
console.log(phrasesUp);

// - Ordenacion
let unsorted = ["c", "a", "d", "b"];
let sorted = unsorted.sort(); //-> Sin parametros convierte a strings y ordena alfabeticamente
console.log(sorted);

unsorted = [2, 3, 1, 10, 4];
sorted = unsorted.sort(); //-> Sin parametros convierte a strings y ordena alfabeticamente
console.log(sorted);

unsorted = [2, 3, 1, 10, 4];
sorted = unsorted.sort((a, b) => a - b);
console.log(sorted);

// - Reverse

sorted.reverse(); // -> Muta el Array, no necesitas guardarlo en una nueva variable
console.log(sorted);

// - Búsqueda

console.log(sorted.includes(3));
console.log(sorted.includes(33));

// - Find

console.log(sorted.find((element) => element % 2 == 0));

sorted = [1, 3, 5, 7];
console.log(sorted.find((element) => element % 2 == 0)); // -> retorna undefined si no encuentra ninguno

// - Find index
console.log(sorted.findIndex((element) => element % 2 != 0));

console.log(sorted.findIndex((element) => element % 2 == 0)); //-> retorna -1 si no encuentra ninguno

// Sets avanzados

// - Operaciones

// Eliminacion de duplicados

const numbersArrays = [1, 2, 2, 3, 4, 3];

const numbersSet = [...new Set(numbersArrays)]; //-> con el Spread lo mantenemos en array no lo pasamos a un set

console.log(numbersSet);

// Union

const setA = new Set([1, 2, 3]);
const setB = new Set([3, 2, 4, 5, 6]);

const union = new Set([...setA, ...setB]);
console.log(union);

//Interseccion -> los elementos comunes de los dos set

const interseccionSet = new Set([...setA].filter((x) => setB.has(x)));
console.log(interseccionSet);

//Diferencia - > los elementos que están en set y no en el otro

const diference = new Set([...setA].filter((x) => !setB.has(x)));
console.log(diference);

//Conversion

console.log([...setA]);

// - Iteraccion

//foreach

setA.forEach((x) => console.log(x));

//maps avanzados
let myMap = new Map([
  ["name", "Ruben"],
  ["edad", 40],
]);
console.log(myMap);
myMap.forEach((value, key) => console.log(key, value));

// - Conversion

// Mapa a array
const arrayFromMap = Array.from(myMap);
console.log(arrayFromMap);

// Mapa a objeto
const objectFromMap = Object.fromEntries(myMap);
console.log(objectFromMap);

// Objecto a Map
const mapFromObject = new Map(Object.entries(objectFromMap));
console.log(mapFromObject);
