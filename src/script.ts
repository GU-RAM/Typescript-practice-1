import { filmData, multipleFilmsData } from "./getFilmData.js";

const searchedMovie: HTMLInputElement | null = document.querySelector(
  ".one-movie-search-input"
);
const oneMovieSearchBtn: HTMLButtonElement | null = document.querySelector(
  ".one-movie-search-btn"
);

// One movie search button
oneMovieSearchBtn?.addEventListener("click", () => {
  if (searchedMovie?.value) {
    filmData(searchedMovie);
  }
});

// Working on multiple-movies div
const multipleMoviesInput1: HTMLInputElement | null = document.querySelector(
  ".multiple-movies-input1"
);
const multipleMoviesInput2: HTMLInputElement | null = document.querySelector(
  ".multiple-movies-input2"
);
const multipleMoviesInput3: HTMLInputElement | null = document.querySelector(
  ".multiple-movies-input3"
);
const multipleMoviesBtn: HTMLButtonElement | null = document.querySelector(
  ".multiple-movies-btn"
);

// Multiple movies search info button
multipleMoviesBtn?.addEventListener("click", (): void => {
  if (
    multipleMoviesInput1?.value &&
    multipleMoviesInput2?.value &&
    multipleMoviesInput3?.value
  ) {
    multipleFilmsData(
      multipleMoviesInput1,
      multipleMoviesInput2,
      multipleMoviesInput3
    );
  }
});
