/*Ejercicio 19: Funciones Anónimas y Arrow Functions
Ahora que has comprendido la diferencia entre pasar una función como referencia y ejecutarla, es el momento de usar una función anónima y una arrow function.
Copia la clase Despensa y la creación de su instancia con los productos del ejercicio anterior.
Llama de nuevo al método despensa.filtrar(), pero esta vez:
No uses la función tienePocoStock.
Crea una función anónima (o una arrow function) directamente como argumento, que filtre los productos con una cantidad mayor o igual a 5.
Imprime el resultado en la consola.
***********
Crea un método en la clase Despensa llamado sumarCantidades().
Este método debe usar reduce() sobre el array #productos para calcular el número total de unidades en la despensa.
reduce() recibe dos argumentos: el callback y un valor inicial.
El callback de reduce() debe recibir un acumulador (acumulador) y el elemento actual (producto). 
La función debe devolver el acumulador más la cantidad del producto actual.
El valor inicial debe ser 0.*/

class Producto {
  #nombre;
  #cantidad;
  constructor() {}
  set nombre(n) {
    if (n == null || n == undefined || n == "") {
      throw new Error("El nombre no puede estar vacio");
    }
    this.#nombre = n;
  }
  get nombre() {
    return this.#nombre;
  }
  set cantidad(c) {
    if (typeof c !== "number") {
      throw new Error("La cantidad debe ser un numero");
    }
    this.#cantidad = c;
  }
  get cantidad() {
    return this.#cantidad;
  }
}

class Despensa {
  #productos = [];
  agregarProducto(p) {
    if (!(p instanceof Producto)) {
      throw new Error("Solo son admitidos productos");
    }
    this.#productos.push(p);
  }
  filtrar(callback) {
    return this.#productos.filter(callback);
  }

  sumarCantidades() {
    return this.#productos.reduce((acc, p) => {
      return acc + p.cantidad;
    }, 0);
  }
}

/**Programa */

const despensa = new Despensa();
try {
  for (let i = 1; i < 10; i++) {
    const p1 = new Producto();
    p1.nombre = "Producto " + i;
    p1.cantidad = i;
    despensa.agregarProducto(p1);
  }
} catch (error) {
  console.log(error.message);
}

console.log(despensa);

const conStock = despensa.filtrar((p) => p.cantidad >= 5);

//Solo los productos con una cantidad menor de 5. Solo el nombre de esos productos. Con el nombre de los productos en mayúsculas.
//Todo en una sola cadena de texto, separado por comas. Por ejemplo: "LECHE, HUEVOS, TOMATES".
const conStockBajo = despensa.filtrar((p) => p.cantidad < 5);
console.log(
  conStockBajo
    .map((p) => p.nombre)
    .join(", ")
    .toUpperCase()
);
let x = 0;
let total = despensa.sumarCantidades();
console.log(total);
