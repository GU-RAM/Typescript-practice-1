export interface FilmData {
  Year: string;
  Actors: string;
  Country: string;
  Runtime: string;
}

export interface FilmInfo {
  ageOfMovie: number;
  actors: string;
  country: string;
}

export interface Country {
  currencies: Record<string, { name: string }>;
  tld: string[];
}
