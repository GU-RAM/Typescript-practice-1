import { movieInfo, moviesInfo } from "./movieInfoFns.js";
import { getFilmData } from "./api.js";

export function filmData(searchedMovie: HTMLInputElement): void {
  const movieInfoDiv = document.querySelector(".one-movie-info");
  movieInfoDiv ? movieInfoDiv.remove() : null;

  getFilmData(searchedMovie.value)
    .then((data) => {
      let ageOfMovie = new Date().getFullYear() - +data.Year;
      let actors = data.Actors;
      let country = data.Country;
      movieInfo({ ageOfMovie, actors, country });
    })
    .catch(() => console.log("error occured"));
  searchedMovie.value = "";
}

// Multiple movies search info button
export function multipleFilmsData(
  multipleMoviesInput1: HTMLInputElement,
  multipleMoviesInput2: HTMLInputElement,
  multipleMoviesInput3: HTMLInputElement
): void {
  const moviesInfoDiv = document.querySelector(".multiple-movies-info");
  moviesInfoDiv ? moviesInfoDiv.remove() : null;

  Promise.all([
    getFilmData(multipleMoviesInput1.value),
    getFilmData(multipleMoviesInput2.value),
    getFilmData(multipleMoviesInput3.value),
  ]).then((result) => {
    let countries: string[] = [];
    let duration: number = 0;
    result.forEach((data) => {
      duration += +data.Runtime.split(" ")[0];
      // Defend code to repeat countries movies are made in
      let newCountries = data.Country.split(",");
      newCountries.forEach((country: string) => {
        countries.push(country);
        countries = [...new Set(countries)];
      });
    });

    moviesInfo(duration, countries);
  });
}
