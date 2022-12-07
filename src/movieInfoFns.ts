import { displayCollectedInfo } from "./dispOneMovieCollectedInfo.js";
import { getCountryData } from "./api.js";

// One movie info
export async function movieInfo(
  ageOfMovie: number,
  actors: string,
  country: string
) {
  // Collect only names of actors
  let actorsNamesAndLastNames = actors.split(" ");
  let actorsNames = "";
  actorsNamesAndLastNames.forEach((el, i) => {
    i % 2 === 0 ? (actorsNames += `${el}, `) : null;
  });

  //Collect countries
  const countriesToArray = country.split(",");
  let currencies: string[] = [];
  let flags: string[] = [];
  for (let el of countriesToArray) {
    const elWithoutSpacesBefore = el.replace(/^\s+|\s+$/gm, "");
    const resMovie = await getCountryData(elWithoutSpacesBefore);
    const resMovieData = await resMovie.json();
    const currenciesCombined = Object.keys(resMovieData[0].currencies);

    currenciesCombined.forEach((el) => {
      currencies.push(resMovieData[0].currencies[el].name + ", ");
    });

    flags.push(resMovieData[0].tld[0].slice(1));
  }

  // Display collected info
  displayCollectedInfo(ageOfMovie, actorsNames, currencies, flags);
}

// Display searched movies total minutes and countries they were made in
const multipleMoviesDiv = document.querySelector(".multiple-movies");

export function moviesInfo(durationSum: number, allCountries: string[]) {
  const searchedMoviesInfo = document.createElement("div");
  searchedMoviesInfo.className = "multiple-movies-info";
  searchedMoviesInfo.innerHTML = `<div><span class='searched-info-headers'>Total length of movies is:</span> ${durationSum} min</div> <div><span class='searched-info-headers'> Countries they were made in are:</span> ${allCountries.join(
    ", "
  )} </div>`;
  multipleMoviesDiv?.prepend(searchedMoviesInfo);
}
