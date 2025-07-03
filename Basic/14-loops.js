//Loops o bucles

//for
for (let i = 0; i < 5; i++) {
  console.log(`Ola ${i}`);
}

const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(`Numero: ${numbers[i]}`);
}

//While
let i = 0;
while (i < 5) {
  console.log(`Ola ${i}`);
  i++;
}

//Do While
i = 0;
do {
  console.log(`Ola ${i}`);
  i++;
} while (i < 5);

//for of
let myArray = [1, 2, 3, 4, 5];
mySet = new Set(["123456", 2, 3, "ola"]);
myMap = new Map([
  ["name", "Ruben"],
  ["email", "correo@correo.com"],
  ["edad", 40],
]);
for (let valor of myArray) {
  console.log(valor);
}
for (let valor of mySet) {
  console.log(valor);
}

for (let valor of myMap) {
  console.log(valor);
}

myString = "Ola pepe";
for (let v of myString) {
  console.log(v);
}

//Buenas practicas
for (let i = 0; i < 15; i++) {
  if (i == 3) {
    continue;
  }
  if (i == 6) {
    break;
  }
  console.log("valor:" + i);
}
