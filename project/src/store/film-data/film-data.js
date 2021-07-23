import {ActionType} from '../action';
import { DEFAULT_GENRE, PROMO_FILM_ID } from '../../const';
import {adaptFilmToClient} from '../adapter';

const initialState = {
  genre: DEFAULT_GENRE,
  films: [],
  similarFilms: [],
  promoFilm: {},
  currentFilm: {},
  isDataLoaded: false,
  isFilmDataLoaded: false,
  isSimilarFilmsLoaded: false,
  isFilmOfDayLoaded: false,
};

const filmData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload,
      };
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload.map((film) => adaptFilmToClient(film)),
        isDataLoaded: true,
      };
    case ActionType.LOAD_SIMILAR_FILMS:
      return {
        ...state,
        similarFilms: action.payload.map((film) => adaptFilmToClient(film)),
        isSimilarFilmsLoaded: true,
      };
    case ActionType.LOAD_PROMO_FILM:
      return {
        ...state,
        promoFilm: adaptFilmToClient(
          {
            ...action.payload,
            id: PROMO_FILM_ID,
          }),
        isFilmOfDayLoaded: true,
      };
    case ActionType.LOAD_FILM_INFO:
      return {
        ...state,
        currentFilm: adaptFilmToClient(action.payload),
        isDataLoaded: true,
        isFilmDataLoaded: true,
      };
    default:
      return state;
  }
};

export {filmData};
