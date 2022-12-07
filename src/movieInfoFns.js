var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { displayCollectedInfo } from "./dispOneMovieCollectedInfo.js";
import { getCountryData } from "./api.js";
// One movie info
export function movieInfo(ageOfMovie, actors, country) {
    return __awaiter(this, void 0, void 0, function* () {
        // Collect only names of actors
        let actorsNamesAndLastNames = actors.split(" ");
        let actorsNames = "";
        actorsNamesAndLastNames.forEach((el, i) => {
            i % 2 === 0 ? (actorsNames += `${el}, `) : null;
        });
        //Collect countries
        const countriesToArray = country.split(",");
        let currencies = [];
        let flags = [];
        for (let el of countriesToArray) {
            const elWithoutSpacesBefore = el.replace(/^\s+|\s+$/gm, "");
            const resMovie = yield getCountryData(elWithoutSpacesBefore);
            const resMovieData = yield resMovie.json();
            const currenciesCombined = Object.keys(resMovieData[0].currencies);
            currenciesCombined.forEach((el) => {
                currencies.push(resMovieData[0].currencies[el].name + ", ");
            });
            flags.push(resMovieData[0].tld[0].slice(1));
        }
        // Display collected info
        displayCollectedInfo(ageOfMovie, actorsNames, currencies, flags);
    });
}
// Display searched movies total minutes and countries they were made in
const multipleMoviesDiv = document.querySelector(".multiple-movies");
export function moviesInfo(durationSum, allCountries) {
    const searchedMoviesInfo = document.createElement("div");
    searchedMoviesInfo.className = "multiple-movies-info";
    searchedMoviesInfo.innerHTML = `<div><span class='searched-info-headers'>Total length of movies is:</span> ${durationSum} min</div> <div><span class='searched-info-headers'> Countries they were made in are:</span> ${allCountries.join(", ")} </div>`;
    multipleMoviesDiv === null || multipleMoviesDiv === void 0 ? void 0 : multipleMoviesDiv.prepend(searchedMoviesInfo);
}
