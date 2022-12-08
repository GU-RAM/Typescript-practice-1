import { Country, FilmData } from "./interfaces";

export function getFilmData(filmName: string): Promise<FilmData> {
  return fetch(`http://www.omdbapi.com/?t=${filmName}&apikey=c69771f5`).then(
    (data) => data.json()
  );
}

export function getCountryData(countryName: string): Promise<Country> {
  return fetch(`https:restcountries.com/v3.1/name/${countryName}?fullText=true
    `)
    .then((data) => data.json())
    .then((data) => data[0]);
}
