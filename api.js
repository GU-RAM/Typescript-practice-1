export function getFilmData(filmName) {
  return fetch(`http://www.omdbapi.com/?t=${filmName}&apikey=c69771f5`).then(
    (data) => data.json()
  );
}

export function getCountryData(countryName) {
  return fetch(`https:restcountries.com/v3.1/name/${countryName}?fullText=true
    `);
}
