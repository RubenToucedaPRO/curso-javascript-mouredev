//Expresiones regulares

// - Sintaxis
//Dos formas de definirla
const miRegex = /ab/; //Las expresiones regulares van entre barras
const miRegex2 = RegExp("abc");

const text = "Hola abc Javascript";

// test
console.log(miRegex.test(text));
console.log(miRegex2.test(text));

const regex3 = /\d/;

const text2 = "Mi edad es 40";
console.log(regex3.test(text2));

// replace: reemplaza el texto que coincide con el patron

const regex5 = /JavaScript/;
console.log("Hola JavaScript".replace(regex5, "JS"));
console.log("Hola JavaScript".replace("JavaScript", "JS"));
console.log("Estoy contando 1 2 3 ".replace(regex3, "x"));

const regex4 = /\d+/;
console.log("Estoy contando 1 2 3 ".replace(regex4, "x"));
//console.log("Estoy contando 1 2 3 ".replaceAll(regex4, "x"));

const regex6 = /\d/g; //la g indica de manera global -> se denomina flag lo que está fuera de la
//  barra, exec() avanza y encuentra todas las coincidencias
console.log("Estoy contando 1 2 3 ".replace(regex6, "x"));

//regex101.com ->Pagina web para testear las expresiones regulares

// exec: retorna detalles de la coincidencia
console.log(regex3.exec(text2)); //Devuleve un array indicando donde encontró UNA coincidencia

//Así nos retorna cada una de las coincidencias-> importante la g de global para que avance en la busqueda
while ((match = regex6.exec(text2)) !== null) {
  console.log(match);
}
