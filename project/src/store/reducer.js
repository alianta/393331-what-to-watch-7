import {ActionType} from './action';
import films from '../mocks/films';
import { DEFAULT_GENRE } from '../const';
import { getFilmsFromGenre } from '../utils';

const initialState = {
  genre: DEFAULT_GENRE,
  films: getFilmsFromGenre(films, DEFAULT_GENRE),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: state.genre + action.payload,
      };
    case ActionType.GET_FILMS_BY_GENRE:
      return {
        ...state,
        films: state.films + action.payload,
      };
    default:
      return state;
  }
};


export {reducer};
