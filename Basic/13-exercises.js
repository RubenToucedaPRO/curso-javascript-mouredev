// 1. Crea un array que almacene cinco animales
let array = ["perro", "gato", "mono", "lobo", "oso"];
console.log(`Animales: ${array}`);

// 2. Añade dos más. Uno al principio y otro al final
array.unshift("vaca");
array.push("raton");
console.log(`Animales: ${array}`);

// 3. Elimina el que se encuentra en tercera posición
array.splice(2, 1);
console.log(`Animales: ${array}`);

// 4. Crea un set que almacene cinco libros
let set = new Set(["L1", "L2", "L3", "L4", "L5"]);
console.log(set);

// 5. Añade dos más. Uno de ellos repetido
set.add("L1");
set.add("L6");
console.log(set);

// 6. Elimina uno concreto a tu elección
set.delete("L2");
console.log(set);

// 7. Crea un mapa que asocie el número del mes a su nombre
let map = new Map([
  [1, "enero"],
  [2, "Febrero"],
  [3, "Marzo"],
  [4, "Abril"],
  [5, "Mayo"],
]);
console.log(map);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (map.has(5)) {
  console.log(map.get(5));
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
map.set("verano", "Julio y Agosto");
console.log(map);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let array2 = [1, 2, 3, 4, 5];
console.log(array2);
let set2 = new Set(array2);
console.log(set2);
let map2 = new Map([["set", set2]]);
console.log(map2);
