/*Ejercicio 1: Variables y Tipos de Datos
Imagina que estás creando un pequeño programa para gestionar el inventario de una tienda.
Declara una variable llamada nombreProducto y asígnale un valor de tipo string (por ejemplo, "Leche").
Declara otra variable precioUnitario y asígnale un valor de tipo number (por ejemplo, 1.5).
Crea una variable enStock y asígnale un valor de tipo boolean (true o false).
Finalmente, declara una variable fechaCaducidad pero no le asignes ningún valor todavía.
Utiliza console.log() y el operador typeof para mostrar por consola el tipo de dato de cada una de las
cuatro variables que has creado.*/
let nombreProducto = "Leche";
let precioUnitario = 1.5;
let enStock = true;
let fechaCaducidad;
console.log(typeof nombreProducto);
console.log(typeof precioUnitario);
console.log(typeof enStock);
console.log(typeof fechaCaducidad);

/*Ejercicio 2: Operadores
Declara dos variables: totalProductos con un valor de 10 y productosVendidos con un valor de 3.
Utiliza el operador de asignación de resta (-=) para actualizar la variable totalProductos con la cantidad de productos vendidos.
Crea una variable llamada hayStockSuficiente. Usando un operador de comparación, verifica si totalProductos es mayor que 5 y 
asigna el resultado a la variable.
Muestra el valor de totalProductos y hayStockSuficiente por consola.*/
let totalProductos = 10;
let productosVendidos = 3;

totalProductos -= productosVendidos;
let hayStockSuficiente = totalProductos > 5;

console.log(totalProductos);
console.log(hayStockSuficiente);

/*Ejercicio 3: Cadenas de Texto (Strings)
Para tu aplicación de despensa, es útil poder manipular los nombres de los productos.
Crea una variable llamada nombreProducto con el valor "arroz blanco".
Crea una nueva variable nombreMayusculas y almacena en ella el valor de nombreProducto convertido a mayúsculas.
Usa el método includes() para verificar si nombreProducto contiene la palabra "arroz" y guarda el resultado en una variable llamada contieneArroz.
Muestra por consola tanto nombreMayusculas como contieneArroz.*/
let nombreProducto1 = "arroz blanco";
let nombreMayusculas = nombreProducto1.toLocaleUpperCase();
let contieneArroz = nombreProducto1.includes("arroz");
console.log(nombreMayusculas, contieneArroz);

/*Ejercicio 4: Condicionales y Lógica de Negocio
Para tu aplicación, debes gestionar las notificaciones de caducidad.
Declara una variable diasParaCaducar y asígnale un número.
Utiliza una estructura if/else if/else para mostrar mensajes por consola basados en la variable:
Si diasParaCaducar es menor o igual a 0, muestra "Producto caducado. Retirar de la despensa."
Si diasParaCaducar está entre 1 y 7 (ambos inclusive), muestra "¡Atención! El producto caduca pronto."
En cualquier otro caso, muestra "Producto en buen estado."*/
let diasParaCaducar = 0;
if (diasParaCaducar <= 0) {
  console.log("Producto caducado. Retirar de la despensa.");
} else if (diasParaCaducar >= 1 && diasParaCaducar <= 7) {
  console.log("Atención! El producto caduca pronto.");
} else {
  console.log("Producto en buen estado.");
}

/*Ejercicio 5: Arrays y Listas de la Compra
En tu aplicación, necesitas gestionar una lista de la compra.
Crea un array llamado listaDeLaCompra y añade los siguientes productos como cadenas de texto: "Leche", "Pan", "Huevos", "Queso".
El usuario compra "Leche" y "Pan". Elimina el primer y el segundo elemento de la lista.
Añade un nuevo producto al final de la lista, por ejemplo, "Fruta".
Muestra la lista final por consola y la longitud de la lista después de los cambios.*/
const listaDeLaCompra = ["Leche", "Pan", "Huevos", "Queso"];
listaDeLaCompra.shift();
listaDeLaCompra.shift();
listaDeLaCompra.push("Fruta");
console.log(listaDeLaCompra);

/*Ejercicio 6: Bucles y Automatización
Para que tu aplicación cree la lista de la compra automáticamente, debes procesar los datos de la despensa.
Crea un array de strings llamado despensa con al menos 5 productos. Asegúrate de incluir algunos productos repetidos,
por ejemplo: "Leche", "Pan", "Leche", "Huevos", "Queso".
Utiliza un bucle for...of para iterar sobre el array despensa.
Dentro del bucle, usa una estructura if para mostrar por consola solo los productos que tengan "Leche" en su nombre.
Luego, usa otro bucle para iterar sobre la misma despensa y, al encontrar el primer producto llamado "Huevos", usa break
para detener el bucle y mostrar por consola "Se han encontrado huevos. Parando la búsqueda."*/

const despensa = [
  "Leche",
  "Pan",
  "Huevos",
  "Queso",
  "Pan de leche",
  "Sal",
  "Azucar",
  "Sal",
  "Pan",
  "Leche semi",
];
despensa.forEach((value) => {
  if (value.toLowerCase().includes("leche")) {
    console.log(value);
  }
});

for (let producto of despensa) {
  if (producto.toLowerCase().includes("huevos")) {
    console.log("Se han encontrado huevos. Parando la búsqueda.");
    break;
  }
}

/*Ejercicio 7: Sets y Estructuras de Datos
Para evitar que se repitan productos en tu lista de la compra, puedes usar un Set.
Crea un array llamado productosConDuplicados con varios productos, incluyendo algunos duplicados, 
como por ejemplo: "Leche", "Pan", "Leche", "Huevos", "Queso".
Utiliza el array para crear un Set llamado listaSinDuplicados.
Convierte el Set listaSinDuplicados de nuevo a un array.
Muestra el array final por consola.*/
const productosConDuplicados = [
  "Leche",
  "Pan",
  "Sal",
  "Azucar",
  "Sal",
  "Pan",
  "Leche semi",
];

const listaSinDuplicados = new Set(productosConDuplicados);
const arraySinDuplicados = Array.from(listaSinDuplicados);
console.log(arraySinDuplicados);

/*Ejercicio 8: Objetos
En tu aplicación, debes almacenar la información de los productos en objetos.
Crea un objeto llamado producto con las siguientes propiedades y valores:
nombre: "Tomates" (string)
cantidad: 12 (number)
unidad: "unidades" (string)
precio: 2.5 (number)
Añade una nueva propiedad al objeto llamada caduca y asigna un valor booleano (true o false).
Utiliza el método delete para eliminar la propiedad unidad.
Muestra el objeto final por consola.*/

const producto = {
  nombre: "Tomates",
  cantidad: 12,
  unidad: "unidades",
  precio: 2.5,
};
producto.caduca = true;
delete producto.unidad;
console.log(producto);

/*Ejercicio 9: Funciones y Métodos de Objeto
Ahora vamos a combinar lo que sabes de objetos con lo que has visto de funciones.
Modifica el objeto producto del ejercicio anterior para que incluya un método llamado mostrarInfo.
El método mostrarInfo debe ser una función que no reciba parámetros.
Dentro de esa función, utiliza console.log() para mostrar una cadena de texto que describa el producto,
usando las propiedades del objeto. Por ejemplo: "El producto Tomates tiene una cantidad de 12 y cuesta 2.5."
Llama al método mostrarInfo para ejecutarlo.*/
producto.mostrarInfo = function () {
  console.log(
    `El producto ${this.nombre} tiene una cantidad de ${this.cantidad} y cuesta ${this.precio}`
  );
};
producto.mostrarInfo();

/*Ejercicio 10: Closures y Funciones de Orden Superior
Para un inventario más avanzado, podrías tener una función que genere otras funciones.
Crea una función llamada crearNotificador que acepte un parámetro tipoDeAlerta (por ejemplo, "caducidad" o "stock bajo").
Dentro de esta función, retorna una función anónima que acepte un parámetro producto.
La función anónima debe mostrar por consola un mensaje que incluya tanto el tipoDeAlerta (del ámbito superior) como el nombre del
producto que recibe como parámetro. Por ejemplo: "Alerta de caducidad para el producto Leche".
Crea una variable alertaDeCaducidad llamando a crearNotificador con el argumento "caducidad".
Llama a alertaDeCaducidad con el argumento "Leche" para probarlo.*/
function crearNotificador(tipoDeAlerta) {
  return (producto) => {
    console.log(`${tipoDeAlerta} para el producto ${producto}`);
  };
}

const alertaDeCaducidad = crearNotificador("caducidad");
alertaDeCaducidad("Leche");

/*Ejercicio 11: Proyecto Despensa - Recopilación y Automatización
Para finalizar, vamos a simular el flujo de tu aplicación.
Crea un Map llamado inventario para almacenar tus productos. La clave debe ser el nombre del producto (string)
y el valor debe ser un objeto con las propiedades cantidad (number) y caducidad (number, en días). Agrega al menos 3 productos.
Crea un array llamado listaCompraVacia con el valor [].
Utiliza un bucle for...of para iterar sobre los elementos de tu Map inventario.
Dentro del bucle, usa una estructura if para verificar si la cantidad de un producto es menor que 5.
Si la condición se cumple, agrega el nombre del producto al array listaCompraVacia.
Al final, muestra el array listaCompraVacia por consola.*/
const inventario = new Map([
  ["Leche", { cantidad: 1, caducidad: 10 }],
  ["Tomates", { cantidad: 5, caducidad: 3 }],
  ["Manzanas", { cantidad: 12, caducidad: 5 }],
]);
const listaCompraVacia = [];
for (let p of inventario) {
  if (p[1].cantidad < 5) {
    listaCompraVacia.push(p[0]);
  }
}
console.log(listaCompraVacia);
