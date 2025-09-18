/*
Clases 74 - Depuración
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=24329
*/

// 1. Crea un código con un error lógico y usa VS Code para encontrarlo
// 2. Experimenta con breakpoints y observa cómo cambia el flujo de ejecución

async function task1() {
  await contadora();
  console.log("Fin");
}

async function contadora() {
  for (let i = 5; i > 0; i--) {
    //setTimeout(1000);
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

task1();
