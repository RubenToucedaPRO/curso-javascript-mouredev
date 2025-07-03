//Manejo de errores
//Excepcion-> evento anomalo

//Produccion de error
//let myObject;
//console.log(myObject.name);

//Captura de errores

//try-catch
try {
  let myObject;
  console.log(myObject.name);
  console.log("Finaliza sin errores");
} catch (error) {
  //Bloque de error
  console.log("Se ha producido un error:", error.message);
}

//finally

try {
  let myObject;
  console.log(myObject.name);
  console.log("Finaliza sin errores");
} catch (error) {
  //Bloque de error
  console.log("Se ha producido un error:", error.message);
} finally {
  console.log("Este codigo se ejecuta siempre");
}

//Lanzamiento de errores
function sumIntegers(a, b) {
  if (typeof a != "number" || typeof b != "number") {
    throw new TypeError("Solo admite numeros");
  }
  if (!Number.isInteger(a) && !Number.isInteger(b)) {
    throw new Error("No son numeros enteros");
  }
  return a + b;
}
try {
  console.log(sumIntegers("0", 10));
} catch (error) {
  console.log("Se ha producido un error:", error.message);
}

//Capturar varios tipos de errores
function sumIntegers(a, b) {
  if (typeof a != "number" || typeof b != "number") {
    throw new TypeError("Solo admite numeros");
  }
  if (!Number.isInteger(a) && !Number.isInteger(b)) {
    throw new Error("No son numeros enteros");
  }
  return a + b;
}
try {
  console.log(sumIntegers("0", 10));
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Se ha producido un error de tipo:", error.message);
  } else if (error instanceof Error) {
    console.log("Se ha producido un error:", error.message);
  }
}

//Crear excepciones personalizadas
class MyCustomSumIntegerError extends Error {
  constructor(message, a, b) {
    super(message);
    this.a = a;
    this.b = b;
  }
  printNumbers() {
    console.log(this.a, "+", this.b);
  }
}

function sumIntegers2(a, b) {
  if (typeof a != "number" || typeof b != "number") {
    throw new TypeError("Solo admite numeros");
  }
  if (!Number.isInteger(a) && !Number.isInteger(b)) {
    throw new Error("No son numeros enteros");
  }
  if (a == 0 || b == 0) {
    throw new MyCustomSumIntegerError("Se están sumando 0", a, b);
  }
  return a + b;
}

try {
  console.log(sumIntegers2(0, 10));
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Se ha producido un error de tipo:", error.message);
  } else if (error instanceof MyCustomSumIntegerError) {
    console.log("Se ha producido un error personalizado:", error.message);
    error.printNumbers();
  } else if (error instanceof Error) {
    console.log("Se ha producido un error:", error.message);
  }
}
