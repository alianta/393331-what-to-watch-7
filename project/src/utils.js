import { DEFAULT_GENRE } from './const';

export function getFilmsFromGenre(films, genre) {
  return (genre===DEFAULT_GENRE)? films: films.filter((film)=> film.genre===genre);
}
