import {ActionType} from './action';
import { DEFAULT_GENRE } from '../const';
import {adaptFilmToClient} from './adapter';
import {AuthorizationStatus, PROMO_FILM_ID} from '../const';

const initialState = {
  genre: DEFAULT_GENRE,
  films: [],
  promoFilm: {},
  currentFilm: {},
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  authorizationInfo: {},
  isDataLoaded: false,
};

const reducer = (state = initialState, action) => {
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
    case ActionType.LOAD_PROMO_FILM:
      return {
        ...state,
        promoFilm: adaptFilmToClient(
          {
            ...action.payload,
            id: PROMO_FILM_ID,
          }),
        isDataLoaded: true,
      };
    case ActionType.LOAD_FILM_INFO:
      return {
        ...state,
        currentFilm: adaptFilmToClient(action.payload),
        isDataLoaded: true,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    case ActionType.LOAD_AUTHORIZATION_INFO:
      return {
        ...state,
        authorizationInfo: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
