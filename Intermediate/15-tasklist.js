const tarea = document.getElementById("tarea");
const boton = document.getElementById("boton");
const lista = document.getElementById("lista");

function addTask() {
  if (tarea.value == "") return;
  const newElement = document.createElement("li");
  newElement.textContent = tarea.value;
  newElement.addEventListener("click", () => {
    newElement.remove();
  });

  lista.appendChild(newElement);
  tarea.value = "";
}

boton.addEventListener("click", addTask);

tarea.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
