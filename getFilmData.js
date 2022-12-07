import { movieInfo, moviesInfo } from "./movieInfoFns.js";

function getData(url) {
  return fetch(url).then((data) => data.json());
}

export function filmData(searchedMovie) {
  const movieInfoDiv = document.querySelector(".one-movie-info");
  movieInfoDiv ? movieInfoDiv.remove() : null;
  getData(`http://www.omdbapi.com/?t=${searchedMovie.value}&apikey=c69771f5`)
    .then((data) => {
      if (data.Response === "True") {
        let ageOfMovie = new Date().getFullYear() - data.Year;
        let actors = data.Actors;
        let country = data.Country;
        movieInfo(ageOfMovie, actors, country);
      }
    })
    .catch(() => console.log("error occured"));
  searchedMovie.value = "";
}

// Multiple movies search info button
let duration = 0;
let population = 0;
let countries = "";

export function multipleFilmsData(
  multipleMoviesInput1,
  multipleMoviesInput2,
  multipleMoviesInput3
) {
  const moviesInfoDiv = document.querySelector(".multiple-movies-info");
  moviesInfoDiv ? moviesInfoDiv.remove() : null;
  Promise.all([
    multipleMoviesInput1,
    multipleMoviesInput2,
    multipleMoviesInput3,
  ]).then((multipleMoviesInputs) => {
    multipleMoviesInputs.forEach((input, index) => {
      getData(`http://www.omdbapi.com/?t=${input.value}&apikey=c69771f5`)
        .then((data) => {
          if (data.Response === "True") {
            duration += +data.Runtime.split(" ")[0];
            // Defend code to repeat countries movies are made in
            let newCountries = data.Country.split(",");
            newCountries.forEach((country) => {
              if (!countries.includes(country)) {
                countries += data.Country + ", ";
              }
            });
            index === multipleMoviesInputs.length - 1
              ? moviesInfo(duration, countries)
              : null;
          }
        })
        .catch(() => console.log("error occured"));
      input.value = "";
    });
  });
}
