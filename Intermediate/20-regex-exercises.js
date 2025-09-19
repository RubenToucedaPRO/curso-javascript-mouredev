/*
Clase 79 - Regex
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=25888
*/

// 1. Crea una RegEx que valide correos electrónicos
const regexMail = /^[a-zA-Z0-9][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(regexMail.test(".joselito@gmail.com"));
console.log(regexMail.test("jo$elito%&._+@gmail.com"));
console.log(regexMail.test("jo$elito%&._a@gmail.com"));

// 2. Crea una RegEx obtenga Hashtags de un Texto
console.log("------------------");
const regexHashtags = /#/g;
const frase = "Hola # don pepito #._,";
while ((check = regexHashtags.exec(frase)) != null) {
  console.log(check);
}

// 3. Crea una RegEx que valide contraseñas seguras (mínimo 8 caracteres, al menos una letra y
// un número)
console.log("------------------");
const validPass = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
console.log(validPass.test("........."));
console.log(validPass.test(".a"));
console.log(validPass.test("aaa"));
console.log(validPass.test(".a12345"));
console.log(validPass.test(".a123456"));
console.log(validPass.test(".a123456."));

// NOTA: Aplícalas utilizando diferentes operaciones
