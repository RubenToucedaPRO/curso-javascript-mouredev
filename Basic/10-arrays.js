//Arrays

//Declaracion
let myArray = []; // -> Mejor usar esta
let myArray2 = new Array();

console.log(myArray);
console.log(myArray2);

myArray = [1];
console.log(myArray);

myArray2 = new Array(2);
console.log(myArray2);

myArray = [1, 2, 3, 4];
console.log(myArray);

myArray2 = new Array(1, 2, 3, 4); //-> Es confuso pero funciona
console.log(myArray2);

myArray2 = new Array(3);
myArray2[0] = "Ola";
myArray2[1] = "que";
myArray2[2] = "tal";
myArray2[5] = "tal";
console.log(myArray2);

myArray[0] = "Ola";
myArray[1] = "que";
myArray[2] = "tal";
console.log(myArray);

//Metodos comunes
myArray = [];

// push y pop -> push añade, pop elimina
myArray.push("Ola");
myArray.push("que");
myArray.push("tal");
console.log(myArray);
myArray.pop();
console.log(myArray);

//shift -> Coge el primer elemento, lo devuelve y lo borra
console.log(myArray.shift());
console.log(myArray);

//unshift -> Agrega por el inicio
myArray.unshift("1");
myArray.unshift(33);
console.log(myArray);

//lenght
console.log(myArray.length);

//Clear
myArray = []; // -> la forma correcta
console.log(myArray);
myArray.length = 0; //->Borra pero es una forma alternativa

//Slice -> Extrae las posiciones indicadas sin incluir la posicion fin
myArray = [1, 2, 3, 4, 5, 6];
console.log("Slice: " + myArray.slice(1, 3));

//splice -> elimina los elementos indicados en el rango e incluso en un tercer parametro podemos añadir otro valor en su lugar
myArray.splice(2, 3);
console.log(myArray);

myArray = [1, 2, 3, 4, 5];
myArray.splice(1, 2, "ola");
console.log(myArray);
