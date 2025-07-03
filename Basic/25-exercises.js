// 1. Captura una excepción utilizando try-catch
// 2. Captura una excepción utilizando try-catch y finally
// 3. Lanza una excepción genérica
// 4. Crea una excepción personalizada
// 5. Lanza una excepción personalizada
// 6. Lanza varias excepciones según una lógica definida
// 7. Captura varias excepciones en un mismo try-catch
class MyException extends Error {
  constructor(message, a, b) {
    super(message);
    this.a = a;
    this.b = b;
  }
  printValues() {
    console.log(this.a, "y", this.b);
  }
}

function resta(a, b) {
  if (a < b) {
    throw new Error("Error: a es menor que b");
  }
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new MyException("Mi excepcion: No son enteros", a, b);
  }
  return a - b;
}

try {
  let res = resta(2, 10);
  console.log(res);
} catch (error) {
  if (error == MyException) {
    console.log(error.message);
  } else {
    console.log(error.message);
  }
} finally {
  console.log("Fin");
}

try {
  resta(1.2, 1);
  console.log(res);
} catch (error) {
  if (error instanceof MyException) {
    console.log(error.message);
  } else {
    console.log(error.message);
    error.printValues();
  }
} finally {
  console.log("Fin");
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
let a = [1.1, 2, 3, "a", 4];
for (let i = 0; i < a.length; i++)
  try {
    let res = parseFloat(a[i]);
    if (Number.isNaN(res)) {
      throw new Error("Imposible convertir");
    }
    console.log(res);
  } catch (error) {
    console.log("Error:", error.message);
  }

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
class MyException2 extends Error {
  constructor(message, a) {
    super(message);
    this.a = a;
  }
  printError() {
    console.log(this.a, "no existe");
  }
}
function hasProperty(a, b) {
  if (!(a in b)) {
    throw new MyException2("no existe", a);
  } else {
    console.log(a, "existe");
  }
}

let perro = {
  name: "Tom",
  age: 2,
  color: "negro",
};

try {
  hasProperty("age", perro);
  hasProperty("alias", perro);
} catch (error) {
  error.printError();
} finally {
  console.log("Fin");
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
function esMayorA100(a) {
  let i = 0;
  do {
    try {
      if (!(a > 100)) {
        throw new Error("No es mayor que 100");
      } else {
        return true;
      }
    } catch (error) {
      console.log(error.message);
    }
    i++;
  } while (i < 10);

  return false;
}

console.log(esMayorA100(10));
