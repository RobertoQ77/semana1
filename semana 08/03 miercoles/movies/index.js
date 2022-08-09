// La logica del DOM
import {
    getMovies,
    getMoviesFromMockApi,
    storeMovieMockApi,
  } from "./service/index.js";
  
  const btnGetMovies = document.querySelector("#btn-get-movies");
  const btnSaveApi = document.querySelector("#btn-save-api");
  const btnGetMoviesFromMockApi = document.querySelector(
    "#btn-get-movies-mock-api"
  );
  const containerMovies = document.querySelector("#container-movies");
  
  const moviesWithImage = [];
  
  btnGetMovies.onclick = async function () {
    const movies = await getMovies();
  
    containerMovies.innerHTML = "";
  
    movies
      .sort(() => 0.5 - Math.random())
      .forEach(async (movie) => {
        const imageUrl = movie.images["Poster Art"].url;
  
        const response = await fetch(imageUrl);
        if (response.ok) {
          // Si la peticion de la imagen esta ok vamos a renderizar la pelicula
          renderMovie(movie);
        }
      });
  };
  
  btnSaveApi.onclick = function () {
    console.log(moviesWithImage);
    moviesWithImage.forEach(async (movie) => {
      await storeMovieMockApi(movie);
    });
  };
  
  btnGetMoviesFromMockApi.onclick = async function () {
    const movies = await getMoviesFromMockApi();
    console.log(movies);
  };
  
  function renderMovie(movie) {
    // va a contar la cantidad elmentos renderizado en nuestro html
    const movies = document.querySelectorAll("#container-movies .col");
  
    if (movies.length >= 20) return;
  
    moviesWithImage.push(movie);
  
    containerMovies.innerHTML += `
      <div class="col">
        <div class="card my-3">
          <div class="into-photo">
            <span class="badge text-bg-${
              movie.programType === "series" ? "success" : "warning"
            }">${movie.programType}</span>
            <img
              src="${movie.images["Poster Art"].url}"
              class="card-img-top"
              alt=""
            />
          </div>
          <div class="card-body">
            <div class="card-title">${movie.title}</div>
          </div>
        </div>
      </div>
    `;
  }