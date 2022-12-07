import { filmData, multipleFilmsData } from "./getFilmData.js";
const searchedMovie = document.querySelector(".one-movie-search-input");
const oneMovieSearchBtn = document.querySelector(".one-movie-search-btn");
// One movie search button
oneMovieSearchBtn === null || oneMovieSearchBtn === void 0 ? void 0 : oneMovieSearchBtn.addEventListener("click", () => {
    if (searchedMovie === null || searchedMovie === void 0 ? void 0 : searchedMovie.value) {
        filmData(searchedMovie);
    }
});
// Working on multiple-movies div
const multipleMoviesInput1 = document.querySelector(".multiple-movies-input1");
const multipleMoviesInput2 = document.querySelector(".multiple-movies-input2");
const multipleMoviesInput3 = document.querySelector(".multiple-movies-input3");
const multipleMoviesBtn = document.querySelector(".multiple-movies-btn");
// Multiple movies search info button
multipleMoviesBtn === null || multipleMoviesBtn === void 0 ? void 0 : multipleMoviesBtn.addEventListener("click", () => {
    if ((multipleMoviesInput1 === null || multipleMoviesInput1 === void 0 ? void 0 : multipleMoviesInput1.value) &&
        (multipleMoviesInput2 === null || multipleMoviesInput2 === void 0 ? void 0 : multipleMoviesInput2.value) &&
        (multipleMoviesInput3 === null || multipleMoviesInput3 === void 0 ? void 0 : multipleMoviesInput3.value)) {
        multipleFilmsData(multipleMoviesInput1, multipleMoviesInput2, multipleMoviesInput3);
    }
});
