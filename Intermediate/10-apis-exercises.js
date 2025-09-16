/*
Clase 60 - APIs
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=18710
*/

// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones
const url = "https://jsonplaceholder.typicode.com/posts";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error");
  });

// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error
async function getEjercicio2() {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error GET");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error", error);
  }
}

getEjercicio2();

// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas
async function getEjercicio3() {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error", error);
  }
}

getEjercicio3();

// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body
let datos = {
  title: "Nuevo post",
  body: "body",
  userId: 1,
};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify(datos),
  headers: { "Content-type": "application/json; charset=UTF-8" },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));

// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder
let datos5 = {
  title: "Nuevo post 2",
  body: "body 2",
  userId: 1,
};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "PUT",
  body: JSON.stringify(datos5),
  headers: { "Content-type": "application/json; charset=UTF-8" },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));

// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente
let datos6 = {
  body: "Body del nuevo post 2",
};

fetch("https://jsonplaceholder.typicode.com/posts/101", {
  method: "PATCH",
  body: JSON.stringify(datos6),
  headers: { "Content-type": "application/json; charset=UTF-8" },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));

// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta

fetch("https://jsonplaceholder.typicode.com/posts/101", {
  method: "DELETE",
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error DELETE");
    }
    return "Recurso eliminado";
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap
require("dotenv").config();
let APIKey = process.env.API_KEY_WEATHER;

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`
    );
    if (!response.ok) {
      throw new Error(
        `${response.status} en la solcitud de tiempo para ${city}.
        ${response.statusText}`
      );
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getWeather("Madrid");

// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie
async function getPokemon(pokemon) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getDetalle(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

const pokemon = await getPokemon("ditto");

const especie = await getDetalle(pokemon.species.url);

const cadenaEvolutiva = await getDetalle(especie.evolution_chain.url);

// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API
