// Programacion asincrona

// Codigo sincrono
console.log("Inicio");
//for (let i = 0; i < 10000000000; i++) {}
console.log("Fin");

//Event loop (Bucle de eventos)

//Componentes del Event Loop:
// - Call Stack (Pila de ejecucion)
// - Web APIs (APIs del navegador) o Node.js
// - Task Queue (Cola de tareas) y MicrotaskQueue

// Flujo del Event Loop:
// 1. Call Stack
// 2. Operaciones asincronas -> Web APIs o Node.js
// 3. Operacion termina -> La coloca en Task Queue o Microtask Queue
// 4. Si Call Stack vacio -> Mueve tareas del Microtask Queue o Task Queue al Call Stack
// 5. El proceso se repite

// Codigo asincrono

// - Callbacks -> funcion que se pasa como argumento a otra funcion
console.log("Inicio");
//setTimeout es una funcion callback
setTimeout(() => {
  console.log("Esto se ejecuta");
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}, 5000);
//for (let i = 0; i < 10000000000; i++) {}
console.log("Fin");

// - Problema: Callback Hell

function step1(callback) {
  setTimeout(() => {
    console.log("Paso 1 completado");
    callback();
  }, 2000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Paso 2 completado");
    callback();
  }, 1000);
}

function step3(callback) {
  setTimeout(() => {
    console.log("Paso 3 completado");
    callback();
  }, 1500);
}

//De esta forma se produce desorden en la ejeccion
step1(() => console.log("Todos los pasos 1 terminados"));
step2(() => console.log("Todos los pasos 2 terminados"));
step3(() => console.log("Todos los pasos 3 terminados"));

//La anidacion lo haria poco mantenible y escalable
/*step1(() => {
    step2(() => {
        step3(() => {
            console.log("Todos los pasos completados")
        })
    })
})
*/

// - Promesas
/*Una Promise es un objeto que representa la eventual finalización (o falla) de una operación asíncrona y su valor resultante.

Estados de una Promise:
Pending (Pendiente): Estado inicial, ni cumplida ni rechazada
Fulfilled (Cumplida): La operación se completó exitosamente
Rejected (Rechazada): La operación falló*/

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const ok = true;
    if (ok) {
      resolve("Operacion exitosa");
    } else {
      reject("Se ha producido un error"); //Importante usar reject para el error para que en la promesa salga por el catch
    }
  }, 6000);
});

promise
  .then((result) => {
    console.log("Exito", result);
  })
  .catch((error) => {
    console.log("Error", error);
  })
  .finally(() => {
    console.log("Fin promesa");
  });

// - Encadenamiento de promesas
function step1Promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Paso 1 promesa completado");
      resolve(); //SIEMPRE: tiene que llevarlo para terminar la promesa aunque lleve codigo que no altere el resultado despues
    }, 10000);
  });
}

function step2Promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Paso 2 promesa completado");
      resolve();
    });
  });
}

function step3Promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Paso 3 promesa completado");
      resolve();
    });
  });
}

step1Promise()
  .then(step2Promise)
  .then(step3Promise)
  .then(() => console.log("Todos los pasos con promesa completados"));

// - Async/Await
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function process() {
  console.log("Inicio del proceso");
  await wait(5000);
  console.log("Han pasado los 5 segundos");

  await wait(2000);
  console.log("Han pasado los 2 segundos");

  await wait(1000);
  console.log("Han pasado los 1 segundos");
  console.log("Fin proceso");
}

process();
