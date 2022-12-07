const oneMovieSearchDiv = document.querySelector(".one-movie-search");

export function displayCollectedInfo(
  ageOfMovie,
  actorsNames,
  currencies,
  flags
) {
  const searchedMovieInfo = document.createElement("ul");
  searchedMovieInfo.className = "one-movie-info";
  searchedMovieInfo.innerHTML = `<div>Movie was made ${ageOfMovie} years ago </div> <div><span class='searched-info-headers'>Actors are: </span> ${actorsNames} </div> <div class="currencies-flags"></div>`;
  oneMovieSearchDiv.prepend(searchedMovieInfo);
  const currenciesAndFlagsDiv = document.querySelector(".currencies-flags");
  for (let i = 0; i < currencies.length; i++) {
    currenciesAndFlagsDiv.innerHTML += `<li><span class='searched-info-headers'>Currency is:</span> ${currencies[i]} <img src="https://flagpedia.net/data/flags/icon/36x27/${flags[i]}.png" alt=""></li>`;
  }
}
