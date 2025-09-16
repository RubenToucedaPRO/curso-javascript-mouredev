// DOM -> document object model
//Representacion en forma de arbol de todo lo que está en la web

//Estructua del DOM
// - Objetos
// - Nodos (elemntos)

//Metodos del DOM ()

// - Selección de elementos

// Metodos basicos (selector HTML)

document; //variable nativa de acceder al DOM

const myElementById = document.getElementById("id"); //Esta operacion va a retornar la referencia al elemento con el identificardor id

const myElementsByClass = document.getElementsByClassName("class");

const myElementsByTagName = document.getElementsByTagName("tag"); //Nombre de la etiqueta

// Metodos mas modernos (selector css)

document.querySelector(".parrafo");

document.querySelectorAll(".parrafo"); //Lista de nodos

// - Manipulacion de elementos
const title = document.getElementById("title");
title.textContent = "Hola Javascript";

const container = document.querySelector(".container");
container.innerHTML = "<p>parrafo nuevo</p>";

// - Modificacion de atributos
const link = document.querySelector("a"); //devuelve el primer enlace que encuentre
const url = link.getAttribute("href");
link.setAttribute("href", "https://example.com");

// Comprobacion de atributo
const hasTarget = link.hasAttribute("target");

//Eliminacion de atributos
link.removeAttribute("target");

// - Interaccion con clases CSS

const box = document.querySelector(".box");
box.classList.add("selected"); //le añades una nueva clase al box por lo cual le aplicaria esos estilos a la clase
box.classList.remove("selected");
box.classList.toggle("selected"); //Si no existe la añade, si existe la elimina

const button = document.querySelector("button");
button.style.backgroundColor = "blue";

// - Creacion y eliminación de elementos

// Creacion
const newParagraph = document.createElement("p"); //creacion de un parrafo
newParagraph.textContent = "Este es un nuevo parrafo creado desde js";
newParagraph.style.padding = "8px";

container.appendChild(newParagraph); //Añadir al contenedor anterior un nuevo parrafo

const itemList = document.querySelector("ul"); //Listado de elementos
const newItem = document.createElement("li");
newItem.textContent = "Nuevo item";

//Insercion en un lugar concreto -> en la segunda posicion

const secondItem = itemList.children[1];
itemList.insertBefore(newItem, secondItem);

//Otras operaciones
itemList.append(newItem); // insertar al final del listado
itemList.prepend(newItem); // insertar al principio del listado
secondItem.before(newItem); // insertar antes del hijo especificado

// Eliminación
newParagraph.remove();

// Eliminacion tradicional
const parent = newParagraph.parentElement;
parent.removeChild(newParagraph);

// Elementos del DOM
function showMsg() {
  alert("Clic");
}
const sendButton = document.querySelector("#send");
sendButton.addEventListener("clic", showMsg); //Escuchador del click
sendButton.addEventListener("clic", () => {
  alert("Clic con una arrow funtcion");
});

//Eventos comunes
document.addEventListener("DOMContentLoaded", () => {
  console.log("El DOM está cargado");
});

sendButton.addEventListener("mouseenter", () => {
  sendButton.style.backgroundColor = "green";
});
sendButton.addEventListener("mouseleave", () => {
  sendButton.style.backgroundColor = "blue";
});

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  //Codigo cuando envio el formulario
});
