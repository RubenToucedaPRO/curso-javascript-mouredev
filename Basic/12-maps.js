//Map
//Map o diccionario es una coleccion de elementos formado por un par clave-valor-> clave o valor puede ser cualquier tipo de dato
//Clave es la llave de busqueda

let myMap = new Map();

console.log(myMap);

//Inicializacion
myMap = new Map([
  ["name", "Ruben"],
  ["email", "correo@correo.com"],
  ["edad", 40],
]);
console.log(myMap);

//Metodos y propiedades
//Set
myMap.set("alias", "pumares");
console.log(myMap);

myMap.set("alias", "puma");
console.log(myMap);

//get
console.log(myMap.get("name"));

//has
console.log(myMap.has("name"));

//keys
console.log(myMap.keys());

//values
console.log(myMap.values());

//entries
console.log(myMap.entries());

//size
console.log(myMap.size);

//delete
myMap.delete("alias");
console.log(myMap);

//Clear
myMap.clear();
console.log(myMap);
