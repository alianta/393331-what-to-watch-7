import {ActionType} from '../action';
import {adaptCommentToClient} from '../adapter';

const initialState = {
  currentFilmComments: [],
  isCurrentFilmCommentsLoaded: false,
};

const reviewData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILM_COMMENTS:
      return {
        ...state,
        currentFilmComments: action.payload.map((comment) => adaptCommentToClient(comment)),
        isCurrentFilmCommentsLoaded: true,
      };
    default:
      return state;
  }
};

export {reviewData};
