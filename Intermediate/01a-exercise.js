/*Ejercicio 18: Filtro Avanzado de Productos (Funciones de Orden Superior)
El objetivo es crear un método genérico en tu clase Despensa que pueda filtrar productos usando cualquier criterio que le pases como una función.
Primero, necesitarás la clase Producto y una clase Despensa que pueda almacenar productos.
Dentro de la clase Despensa, crea un método llamado filtrar. Este método debe aceptar una función (un callback) como único argumento.
El método filtrar debe usar el método filter() de los arrays sobre su campo privado #productos, pasándole directamente el callback que recibió. 
Debe devolver el nuevo array con los productos filtrados.
Fuera de la clase, crea una instancia de Despensa y añade varios objetos Producto (algunos con cantidad baja, < 5, y otros con cantidad alta).
Define una función externa llamada tienePocoStock que reciba un producto y devuelva true si su cantidad es menor a 5.
Llama al método despensa.filtrar() y pásale la función tienePocoStock como argumento.
Muestra el resultado (el array de productos con poco stock) en la consola.*/

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
}
//Funcion callback: filtro por stock menor a 3
function tienePocoStock(p) {
  return p.cantidad < 3;
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

const sinStock = despensa.filtrar(tienePocoStock);
console.log(sinStock);
