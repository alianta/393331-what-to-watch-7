import { DEFAULT_GENRE } from './const';

export function getFilmsFromGenre(films, genre) {
  return (genre===DEFAULT_GENRE)? films: films.filter((film)=> film.genre===genre);
}

export function getGenreList(films) {
  const  genreList = new Set();
  genreList.add(DEFAULT_GENRE);
  films.map((film)=>genreList.add(film.genre));
  return Array.from(genreList);
}
