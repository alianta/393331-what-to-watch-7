import { getFilmsFromGenre } from '../utils';

export const ActionType = {
  CHANGE_GENRE: 'changeGenre',
  GET_FILMS_BY_GENRE: 'getFilmsByGenre',
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  getFilmsByGenre: (films, genre) => ({
    type: ActionType.GET_FILMS_BY_GENRE,
    payload: getFilmsFromGenre(films,genre),
  }),
};
