//Operadores
let a = 5;
let b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
console.log(a++);
console.log(a--);

let myVariable = 2;
console.log(myVariable);
myVariable += 2;
console.log(myVariable);
myVariable -= 2;
console.log(myVariable);
myVariable *= 2;
console.log(myVariable);
myVariable /= 2;
console.log(myVariable);
myVariable %= 2;
console.log(myVariable);
myVariable **= 2;
console.log(myVariable);

a = 5;
console.log(a > b);
console.log(a < b);
console.log(a == b);
console.log(a == 5);
console.log(a == "5");
console.log(a === a);
console.log(a === b);
console.log(a === 5); //Es igual porque es igual en identidad (por tipo y valor)
console.log(a === "5");
console.log(a != 5);
console.log(a !== "5");
console.log(0 == false);
console.log(1 == false);
console.log(2 == false);
console.log(0 == "");
console.log(0 == " ");
console.log(0 == "Hola");

//Operadores logicos
//and -> &&
console.log(5 > 10 && 15 > 20);

//or -> ||
console.log(5 > 1 || 15 > 20);

console.log((5 > 10 && 15 > 20) || 15 > 2);

//not -> !
console.log(!(5 > 10) && !(15 > 20));

//Ternarios ->
const isRaining = true;
isRaining ? console.log("Llueve") : console.log("No llueve");
