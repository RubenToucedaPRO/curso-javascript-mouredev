/*Ejercicio 12: Clases y Destructuración
Para tu aplicación, crearás una clase que represente los productos de tu despensa, y luego usarás la destructuración para extraer sus propiedades.
Define una clase Producto.
El constructor de la clase debe aceptar tres parámetros: nombre (string), cantidad (number) y caducidad (number, en días).
Asigna estos parámetros a las propiedades del objeto (this.nombre, etc.).
Crea una instancia de la clase Producto con los datos que quieras.
Utiliza la destructuración para extraer las propiedades nombre y cantidad del objeto que has creado en el paso anterior.
Muestra por consola el valor de las variables nombre y cantidad que has desestructurado.*/
class Producto {
  #nombre;
  #cantidad;
  #caducidad;
  constructor(nombre = "Sin nombre", cantidad = 0, caducidad = 0) {
    (this.#nombre = nombre),
      (this.#cantidad = cantidad),
      (this.#caducidad = caducidad);
    if (nombre == "" || nombre == null || nombre == undefined) {
      throw new Error("El nombre del producto no puede estar vacío");
    }
  }
  set nombre(nombre) {
    this.#nombre = nombre;
  }
  get nombre() {
    return this.#nombre.toUpperCase();
  }
  set cantidad(cantidad) {
    if (cantidad < 0) {
      throw new Error("Cantidad debe ser superior a 0");
    }
    this.#cantidad = cantidad;
  }
  get cantidad() {
    return this.#cantidad;
  }
  set caducidad(nuevaCaducidad) {
    if (nuevaCaducidad < 0) {
      throw new Error("Caducidad debe ser mayor o igual a 0");
    }
    this.#caducidad = nuevaCaducidad;
  }
  get caducidad() {
    return this.#caducidad;
  }
  aumentarCantidad(cantidadAumentar) {
    if (cantidadAumentar < 0) {
      throw new Error("La cantidad a aumentar debe ser un número positivo");
    }
    this.cantidad += cantidadAumentar;
  }
  disminuirCantidad(cantidadDisminuir) {
    if (cantidadDisminuir < 0 || cantidadDisminuir > this.cantidad) {
      throw new Error(
        "La cantidad a disminuir no puede ser menor a 0 o mayor a la cantidad existente"
      );
    }
    this.cantidad -= cantidadDisminuir;
  }
}
const p1 = new Producto("Peras", 2, 2);
//destructuracion:
const { nombre, cantidad } = p1;
console.log(nombre);
console.log(cantidad);

/*Ejercicio 13: Herencia y Métodos de Clase (versión corregida)
Crea una clase llamada ProductoPerecedero que herede de la clase Producto.
En el constructor de ProductoPerecedero, llama al constructor de la clase padre (super()) y añade un nuevo parámetro fechaCreacion (de tipo Date).
Dentro de esta clase, crea un método llamado esCaducado() que verifique si el producto ha caducado. Utiliza la lógica que te acabo de explicar.
Crea una instancia de la clase ProductoPerecedero. Para el fechaCreacion, puedes pasar new Date() si es un producto de hoy, o crear una fecha en el
pasado para probar que caduca, por ejemplo: new Date('2025-08-20T00:00:00').
Llama al método esCaducado() y muestra el resultado por consola.*/

class ProductoPerecedero extends Producto {
  constructor(nombre, cantidad, caducidad, fechaCreacion) {
    super(nombre, cantidad, caducidad);
    this.fechaCreacion = fechaCreacion;
  }
  esCaducado() {
    const caduca = new Date(this.fechaCreacion);
    caduca.setDate(this.fechaCreacion.getDate() + this.caducidad);
    console.log(caduca);
    return caduca < Date.now();
  }
}

const yogures = new ProductoPerecedero(
  "yogur",
  5,
  19,
  new Date("2025-08-20T00:00:00")
);
console.log(yogures);
console.log(yogures.esCaducado());

/*Ejercicio 14: Manejo de Errores y Clases
Ahora, vamos a aplicar el manejo de errores a la clase Producto. Esto es fundamental para tu proyecto de la despensa, 
ya que la API externa puede devolver datos incorrectos o nulos.
En el constructor de la clase Producto (no la clase ProductoPerecedero), añade una validación para el nombre.
Si el nombre es null, undefined o una cadena vacía, lanza un error con un mensaje descriptivo, por ejemplo: 
"El nombre del producto no puede estar vacío". Usa throw new Error().
Crea una instancia de la clase Producto y pásale un nombre inválido para provocar el error.
Utiliza una estructura try...catch para manejar el error.
Dentro del bloque catch, muestra el mensaje del error en la consola.*/
try {
  const p2 = new Producto("", 2, 2);
} catch (error) {
  console.log(error.message);
}

/*Ejercicio 15: Métodos de clase
Ahora que el manejo de errores está claro, vamos a seguir con el siguiente concepto, el cual es crucial para tu proyecto de la despensa.
En la clase Producto (la clase padre, no ProductoPerecedero), añade un método llamado aumentarCantidad().
Este método debe recibir un parámetro cantidadAumentar.
Dentro del método, incrementa la propiedad this.cantidad del objeto con el valor del parámetro.
Asegúrate de validar que cantidadAumentar sea un número positivo. Si no lo es, lanza un error con un mensaje como: 
"La cantidad a aumentar debe ser un número positivo".
Llama al método aumentarCantidad() desde una instancia de la clase Producto para probarlo.
Añade un bloque try...catch para manejar el caso de un valor inválido.
Cuando lo tengas, comparte tu solución.*/
try {
  const p3 = new Producto("Pan", 2, 2);
  p3.aumentarCantidad(-1);
  console.log(p3);
} catch (error) {
  console.log(error.message);
}

/*Ejercicio 16: Más validaciones en métodos
Ahora que has dominado la lógica para añadir cantidades, vamos a añadir otro método a la clase Producto.
En la clase Producto, añade un método llamado disminuirCantidad().
Este método debe recibir un parámetro cantidadDisminuir.
Dentro del método, decrementa la propiedad this.cantidad del objeto con el valor del parámetro.
Valida que cantidadDisminuir sea un número positivo y que no resulte en una cantidad final menor que cero.
Si alguna de estas condiciones no se cumple, lanza un error con un mensaje descriptivo.
Llama al método disminuirCantidad() para probar ambos casos: uno válido y otro que genere un error.
Añade un bloque try...catch para manejar el caso de un valor inválido.*/
let p4;
try {
  p4 = new Producto("Pan", 2, 2);
  p4.disminuirCantidad(1);
  p4.disminuirCantidad(11);
} catch (error) {
  console.log(error.message);
}
console.log(p4);

/*Ejercicio 17: Getters y Setters para Producto
Ahora que has comprendido la importancia de los campos privados (#), vamos a usarlos para controlar el acceso y la modificación de los datos de tus productos.
Actualiza tu clase Producto para utilizar campos privados (#nombre, #cantidad, #caducidad) en el constructor y en los demás métodos.
Crea un getter para el campo #nombre llamado get nombre(). Este método debe retornar el valor del nombre en mayúsculas.
Crea un setter para el campo #caducidad llamado set caducidad(dias). Dentro de este setter, añade la lógica necesaria para validar que la variable dias es un
número y que su valor es mayor o igual a cero. Si no lo es, lanza un new Error() con un mensaje explicativo.
Crea un producto de ejemplo y utiliza los nuevos getter y setter para probar que funcionan correctamente.
Crea una instancia de la clase Producto y utiliza los nuevos getter y setter para probarlos.*/
let p5;
try {
  p5 = new Producto("Leche", 1, 1);
  p5.caducidad = -5;
} catch (error) {
  console.log(error.message);
}
console.log(p5.nombre);
