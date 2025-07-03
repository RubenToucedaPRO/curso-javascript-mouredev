var variable, ya se desaconseja usarla
let variable
const constante

Tipos de datos
String
Number: 64bits
Boolean
Undefined: variable declarada no inicializada
Null: ariable que no tiene valor, que estamos esperando que lo contenga
Symbol: valores unicos que pueden ser utilizados como valores de propiedades de objetos
BigInt: numero mayor a 64bits

Operadores
+
-
*
/
%
** exponente
++ incremento
-- decremento

Operadores de asignacion
=
+=
-=
*=
/=
%=
**=

Operadores de comparacion
<
>
<=
>=
== igualdad por valor
!=
=== igualdad en identidad (por valor e identidad)
!== distinto en identidad

Truthy values
0==false -> false
1==false -> false
2==false -> false
0=="" -> true
0==" " -> true
0=="Hola" ->false
undefined==null -> true
undefined===null -> false


/*
Truthy values (valores verdaderos)

- Todos los numeros positivos y negativos menos el cero
- Todas las cadenas de texto menos las vacías
- El boolean true
*/

/*
Falsy values (valores falsos)

- 0
-  0n
- null
- undefined
- NaN (Not a Number)
- El boolean false
- Cadenas de texto vacías 
*/

Operadores logicos
&&
||

Operadores ternarios
? :

//Strings
let myName = "Ru";
let greeting = "Ola, " + myName + "!";

console.log(greeting);

//Longitud
console.log(greeting.length);

//Acceso a caracteres
console.log(greeting[2]);

//Metodos comunes
console.log(greeting.toLocaleUpperCase());
console.log(greeting.toLocaleLowerCase());
console.log(greeting.at(-1)); //-> Coge el ultimo caracter
console.log(greeting.indexOf("Ru")); //Indice donde ha encntrado la palabra Inidicado
console.log(greeting.includes("Ru")); //Indica si incluye la cadena
console.log(greeting.slice(0, 4));
console.log(greeting.replace("Ru", "Ruben"));


//Template literals (Plantillas literales) -> interporar variables
let message = `Ola que
tal
estas`;

console.log(message);

console.log(`Ola, ${myName}`); //-> Importante emplear las comillas invertidas


