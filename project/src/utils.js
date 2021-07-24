import { DEFAULT_GENRE, AuthorizationStatus, MAX_BAD_RATING_SCORE, BAD_RATING, MAX_NORMAL_RATING_SCORE, NORMAL_RATING, MAX_GOOD_RATING_SCORE, GOOD_RATING, MAX_VERY_GOOD_RATING_SCORE, VERY_GOOD_RATING, AWESOME_RATING, GENRE_LIST_MAX_COUNT} from './const';

export const getFilmsFromGenre = (films, genre) => (genre === DEFAULT_GENRE)? films: films.filter((film) => film.genre === genre);

export const getGenreList = (films) => {
  const  genreList = new Set();
  genreList.add(DEFAULT_GENRE);
  films.map((film) => genreList.add(film.genre));
  return Array.from(genreList).slice(0,GENRE_LIST_MAX_COUNT+1);
};

export function getRatingDescription (rating) {
  if(rating < MAX_BAD_RATING_SCORE) {
    return BAD_RATING;
  }else if (rating < MAX_NORMAL_RATING_SCORE) {
    return NORMAL_RATING;
  }else if ( rating < MAX_GOOD_RATING_SCORE) {
    return GOOD_RATING;
  }else if ( rating < MAX_VERY_GOOD_RATING_SCORE) {
    return VERY_GOOD_RATING;
  } else {
    return AWESOME_RATING;
  }
}

export const isCheckedAuth = (authorizationStatus) =>
  authorizationStatus === AuthorizationStatus.UNKNOWN;
