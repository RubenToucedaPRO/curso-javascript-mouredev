// Depuración

function sum(a, b) {
  console.log(a);
  return a + b;
}

console.log(sum(3, "5"));

// Depurador (profesional)
function divide(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir por 0");
  }
  return a / b;
}

console.log(divide(5, 0));
