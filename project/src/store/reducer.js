import {ActionType} from './action';
import films from '../mocks/films';

const initialState = {
  genre: 'comedy',
  films: films.filter((film) => film.genre===this.genre),
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
