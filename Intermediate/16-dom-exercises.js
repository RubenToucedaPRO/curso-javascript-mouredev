/*
Clase 71 - DOM
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=23010
*/

// 1. Crea un elemento (por ejemplo, un <h1 id="title">) y cambia su contenido a "¡Hola Mundo!"" al cargar la página
const titulo = document.createElement("h1");
titulo.id = "title";
titulo.textContent = "¡Hola Mundo!";
document.body.appendChild(titulo);

// 2. Inserta una imagen con id="myImage" y cambia su atributo src a otra URL
const miImagen = document.createElement("img");
miImagen.id = "myImage";
miImagen.src = "./javascript-logo-png.png";
miImagen.style.width = "200px";
document.body.appendChild(miImagen);

// 3. Crea un <div id="box"> sin clases y agrega la clase resaltado cuando se cargue la página
const box = document.createElement("div");
box.id = "box";
document.body.appendChild(box);
box.classList.add("resaltado");

// 4. Crea un párrafo con id="paragraph" y cambia su color de texto a azul
const parrafo = document.createElement("p");
parrafo.id = "paragraph";
parrafo.textContent =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
parrafo.style.color = "blue";
document.body.appendChild(parrafo);

// 5. Agrega un botón que, al hacer clic, cree un nuevo elemento <li> con el texto "Nuevo elemento y lo agregue a una lista <ul id="list">
const boton = document.createElement("button");
boton.id = "boton";
boton.textContent = "Agregar elemento a la lista";
document.body.appendChild(boton);

const lista = document.createElement("ul");
lista.id = "list";
document.body.appendChild(lista);

boton.addEventListener("click", () => {
  const elemento = document.createElement("li");
  elemento.id = "item";
  elemento.textContent = "Nuevo elemento";
  lista.appendChild(elemento);
});

// 6. Crea un párrafo con id="deleteParagraph" y un botón. Al hacer clic en el botón, elimina el párrafo del DOM
const parrafo2 = document.createElement("p");
parrafo2.id = "deleteParagraph";
parrafo2.textContent = "Parrafo que será borrado";
document.body.appendChild(parrafo2);

const boton2 = document.createElement("button");
boton2.id = "borraP2";
boton2.textContent = "Eliminar parrafo anterior";
document.body.appendChild(boton2);

boton2.addEventListener("click", () => {
  parrafo2.remove();
});

// 7. Crea un <div id="content"> con algún texto y reemplaza su contenido por un <h2> con el mensaje "Nuevo Contenido"
const div2 = document.createElement("div");
div2.id = "content";
div2.textContent = `Hola don pepito
Hola don Jose`;
div2.style.padding = "10px";
document.body.appendChild(div2);

div2.innerHTML = "<h2>Nuevo contenido</h2>";

// 8. Crea un botón con id="greetBtn" y añade un evento que muestre una alerta con el mensaje "¡Hola!" al hacer clic
const boton3 = document.createElement("button");
boton3.id = "greetBtn";
boton3.textContent = "Saludar";
document.body.appendChild(boton3);

boton3.addEventListener("click", () => {
  const alerta = alert("¡Hola!");
});

// 9. Crea un <input id="textInput"> y un <div id="result">. Al escribir en el input, el <div> se debe actualizarse mostrando lo que se escribe
/*const input = document.getElementById("textInput");
const result = document.getElementById("result");
input.addEventListener("input", updateValue);

function updateValue(e) {
  result.textContent = e.target.value;
}*/
const input = document.getElementById("textInput");
const result = document.getElementById("result");
input.addEventListener("input", () => {
  result.textContent = input.value;
});

// 10. Crea un botón con id="backgroundBtn" y, al hacer clic, cambia el color de fondo del <body> a un color diferente
const boton4 = document.createElement("button");
boton4.textContent = "Cambia color";
document.body.appendChild(boton4);
boton4.addEventListener("click", () => {
  document.body.style.background = "red";
});
