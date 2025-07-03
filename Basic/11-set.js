//Set -> Listado ordenado de elementos que no admite duplicados y no tenemos acceso a la posicion del elemento. Ojo, distingue minusculas de mayusculas por lo cual podrias tener Ola y ola

//Declaracion

let mySet = new Set();

//Inicializacion

mySet = new Set("123456", 2, 3, "ola"); //No es la forma correcta de incializar un set
console.log(mySet);

mySet = new Set(["123456", 2, 3, "ola"]); //Forma correcta
console.log(mySet);

//Metodos comunes
//add -> Añade al final
mySet.add(33);
console.log(mySet);

//delete -> Importante: es necesario indicar el valor del elemento que queremos borrar
mySet.delete(33);
console.log(mySet);
console.log(mySet.delete(33));

//has
console.log(mySet.has("ola"));

//size
console.log(mySet.size);

//Convertir un set a array
let myArray = Array.from(mySet);
console.log(myArray);

mySet = new Set(myArray);
console.log(mySet);
