// Manejo de APIs

// - APIs Rest (usan HTTP +URLs + JSON)

// HTTP (Metodos http)

// Metodos HTTP

// - GET - > obtener datos
// - POST -> enviar datos para crear un nuevo recurso
// - PUT -> actualizar datos en el servidor
// - DELETE

// Códigos de respuesta HTTP
// - 200 OK
// - 201 OK  recurso creado
// - 400 Error del lado cliente
// - 404 No encontrado
// - 500 Error del lado servidor

// Consumir una API

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    //Transforma la respuesta a json
    return response.json(); //Retorna los datos para que el then siguiente los muestre
  })
  .then((data) => {
    //Procesa los datos
    console.log(data);
  })
  .catch((error) => {
    //Captura errores
    console.log("Error", error);
  });

fetch("https://jsonplaceholder.typicode.com/postsaaa") //No falla porque la url es conocida pero para postsaaa no tiene nada de respuesta
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error", error);
  });

/*fetch("https://jsonplaceholder.typicodeaaa.com/posts") //Error porque la url no existe
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error", error);
  });*/

// Uso de Async/Await

async function partialPostUpdate() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    // ⚠️ Aquí se DETIENE hasta que fetch termine
    const data = await response.json(); // el metodo json() devuelve una promesa
    // ⚠️ Aquí también se DETIENE hasta que json() termine
    console.log(data);
  } catch (error) {
    console.log("Error: ", error);
  }
}

partialPostUpdate();

// Solicitud POST

async function partialPostUpdate() {
  try {
    const newPost = {
      userId: 1,
      title: "Nuevo post",
      body: "body mi nuevo post",
    };
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newPost),
    });
    // ⚠️ Aquí se DETIENE hasta que fetch termine
    const data = await response.json(); // el metodo json() devuelve una promesa
    // ⚠️ Aquí también se DETIENE hasta que json() termine
    console.log(data);
  } catch (error) {
    console.log("Error: ", error);
  }
}

partialPostUpdate();

//Herramientas para pruebas
// - Postman
// - APIdog
// - Extension de VS-Code: Thunder Client

// Manejo de errores
fetch("https://jsonplaceholder.typicode.com/ruben")
  .then((response) => {
    if (!response.ok) {
      // Son todas las respuestas 200's
      throw Error("Status http: ", response.status);
    }
    return response.json();
  })
  .catch((error) => {
    //Captura errores
    console.log("Error", error);
  });

//Metodos HTTP adicionales
// - PATCH
async function partialPostUpdate1() {
  try {
    const response = await fetch(
      //Tenemos que indicar el id del post en este caso
      "https://jsonplaceholder.typicode.com/posts/10",
      {
        method: "PATCH", //Metodo Patch
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title: "Nuevo post" }), //Objeto con el atributo a modificar
      }
    );
    // ⚠️ Aquí se DETIENE hasta que fetch termine
    const data = await response.json(); // el metodo json() devuelve una promesa
    // ⚠️ Aquí también se DETIENE hasta que json() termine
    console.log(data);
  } catch (error) {
    console.log("Error: ", error);
  }
}

partialPostUpdate1();

// Autenticacion mediante API Key
async function getWeather(city) {
  const APIKey = "";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&exclude={part}&appid=${APIKey}`
  )
    .then((response) => {
      //Transforma la respuesta a json
      return response.json(); //Retorna los datos para que el then siguiente los muestre
    })
    .then((data) => {
      //Procesa los datos
      console.log(data);
    })
    .catch((error) => {
      //Captura errores
      console.log("Error", error);
    });
}

getWeather("Vilalba");

// Otros métodos de autenticación y autorización

// - Bearer Tokens -> Credenciales simples enviadas en encabezado Authorization: Bearer <token>

// - JWT -> Token estandarizado (RFC 7519) con información del usuario

// Versionado de APIs
// - https://api.example.com/v1/resources -> el v1 indica la version y esa version no aporta una
// informacion, si se modifican, se sube de version y asi se mantienen las dos versiones funcionando
