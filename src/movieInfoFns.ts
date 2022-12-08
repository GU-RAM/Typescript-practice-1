import { displayCollectedInfo } from "./dispOneMovieCollectedInfo.js";
import { getCountryData } from "./api.js";
import { FilmInfo } from "./interfaces.js";

// One movie info
export async function movieInfo(film: FilmInfo): Promise<void> {
  // Collect only names of actors
  let actorsNamesAndLastNames = film.actors.split(" ");
  let actorsNames = "";
  actorsNamesAndLastNames.forEach((el, i) => {
    i % 2 === 0 ? (actorsNames += `${el}, `) : null;
  });

  //Collect countries
  const countriesToArray: string[] = film.country.split(",");
  let currencies: string[] = [];
  let flags: string[] = [];
  for (let el of countriesToArray) {
    const elWithoutSpacesBefore = el.replace(/^\s+|\s+$/gm, "");
    const resCountry = await getCountryData(elWithoutSpacesBefore);
    const currenciesCombined: string[] = Object.keys(resCountry.currencies);

    currenciesCombined.forEach((el: string) => {
      currencies.push(resCountry.currencies[el].name + ", ");
    });

    flags.push(resCountry.tld[0].slice(1));
  }

  // Display collected info
  displayCollectedInfo(film.ageOfMovie, actorsNames, currencies, flags);
}

// Display searched movies total minutes and countries they were made in
const multipleMoviesDiv = document.querySelector(".multiple-movies");

export function moviesInfo(durationSum: number, allCountries: string[]): void {
  const searchedMoviesInfo = document.createElement("div");
  searchedMoviesInfo.className = "multiple-movies-info";
  searchedMoviesInfo.innerHTML = `<div><span class='searched-info-headers'>Total length of movies is:</span> ${durationSum} min</div> <div><span class='searched-info-headers'> Countries they were made in are:</span> ${allCountries.join(
    ", "
  )} </div>`;
  multipleMoviesDiv?.prepend(searchedMoviesInfo);
}
