/*
Clase 45 - Asincronía
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=14558
*/

// 1. Crea una función para saludar que reciba un nombre y un callback.
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".
function mostrarSaludo(nombre) {
  console.log(`Hola ${nombre}`);
}

function saludar(nombre, callback) {
  setTimeout(() => {
    callback(nombre);
  }, 2000);
}

saludar("Pepe", mostrarSaludo);

// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback).
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.
function procesar(n) {
  console.log(`Ejecucion callback ${n}`);
}

function task1(callback) {
  console.log("Ejecucion tarea 1");
  setTimeout(() => {
    callback(1);
  }, 1000);
}

function task2(callback) {
  console.log("Ejecucion tarea 2");
  setTimeout(() => {
    callback(2);
  }, 1000);
}

function task3(callback) {
  console.log("Ejecucion tarea 3");
  setTimeout(() => {
    callback(3);
  }, 1000);
}

task1(procesar);
task2(procesar);
task3(procesar);

// 3. Crea una función para verificar un número que retorne una Promesa.
//    Si el número es par, la promesa se resuelve con el mensaje "Número par".
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".
function verificarNumero(n) {
  return new Promise((resolve, reject) => {
    if (n % 2 == 0) {
      resolve("Es par");
    } else {
      reject("Es impar");
    }
  });
}

verificarNumero(212)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));

// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".
function firstTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}
function secondTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}
function thirdTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1500);
  });
}

firstTask().then(() => console.log("Primera tarea completada"));
secondTask().then(() => console.log("Segunda tarea completada"));
thirdTask().then(() => console.log("Tercera tarea completada"));

// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().
function firstTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Primera tarea completada");
      resolve();
    }, 1000);
  });
}
function secondTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Segunda tarea completada");
      resolve();
    }, 2000);
  });
}
function thirdTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Tercera tarea completada");
      resolve();
    }, 1500);
  });
}

async function executeTasks() {
  await firstTask();

  await secondTask();

  await thirdTask();
}

executeTasks();

// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id < 5) {
        resolve({ id: id, nombre: "Usuario " + id });
      } else {
        reject("Usuario no encontrado");
      }
    }, 2000);
  });
}

async function buscarUsuario(n) {
  try {
    const usuario = await getUser(n);
    console.log(usuario);
  } catch (error) {
    console.error(error);
  }
}

buscarUsuario(2);
buscarUsuario(21);
buscarUsuario(3);

// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
//    console.log("Inicio")
//    setTimeout(() => console.log("setTimeout ejecutado"), 0)
//    Promise.resolve().then(() => console.log("Promesa resuelta"))
//    console.log("Fin")

// 1. Ejecución síncrona - va directamente
console.log("Inicio"); // Se ejecuta inmediatamente
// 2. Programa un setTimeout (va a la cola de MACROTAREAS)
setTimeout(() => console.log("setTimeout ejecutado"), 0);
// 3. Crea una promesa resuelta (va a la cola de MICROTAREAS)
Promise.resolve().then(() => console.log("Promesa resuelta"));
// 4. Ejecución síncrona - va directamente
console.log("Fin"); // Se ejecuta inmediatamente
// 5. Event Loop - primero procesa MICROTAREAS -> "Promesa resuelta"
// 6. Event Loop - luego procesa MACROTAREAS -> "setTimeout ejecutado"

// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.
function task1a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Tarea 1 ejecutada");
      resolve();
    }, 3000);
  });
}

function task2a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Tarea 2 ejecutada");
      resolve();
    }, 2000);
  });
}

function task3a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Tarea 3 ejecutada");
      resolve();
    }, 1000);
  });
}

Promise.all([task1a(), task2a(), task3a()]).then(() => {
  console.log("Todas las promesas resueltas");
});

// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.
function waitSeconds(seg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, seg * 1000);
  });
}
async function ejecutar(seg) {
  await waitSeconds(seg);
  console.log("Tiempo finalizado");
}

ejecutar(5);

// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes
function checkBalance(saldo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      result = saldo;
      resolve(result);
    }, 1000);
  });
}

function withdrawMoney(saldo, retirada) {
  return new Promise((resolve, reject) => {
    console.log(`Retirando ${retirada}$`);
    setTimeout(() => {
      if (retirada < saldo) {
        result = saldo - retirada;
        resolve(result);
      } else {
        result = saldo;
        reject(result);
      }
    }, 2000);
  });
}

let saldo = 500;
async function ejecutarOperaciones(saldo) {
  try {
    saldo = await checkBalance(saldo);
    console.log(`Saldo disponible: ${saldo}`);
    saldo = await withdrawMoney(saldo, 300);
    console.log(`Operación exitosa, saldo restante: ${saldo}$`);
    saldo = await withdrawMoney(saldo, 300);
    console.log(`Operación exitosa, saldo restante: ${saldo}$`);
  } catch {
    console.log(`Error: Fondos insuficientes: ${result}$`);
  }
}

ejecutarOperaciones(saldo);
