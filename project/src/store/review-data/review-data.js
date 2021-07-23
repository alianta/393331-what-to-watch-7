import {adaptCommentToClient} from '../adapter';
import {createReducer} from '@reduxjs/toolkit';
import {loadFilmComments} from '../action';

const initialState = {
  currentFilmComments: [],
  isCurrentFilmCommentsLoaded: false,
};

const reviewData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilmComments, (state, action) => {
      state.currentFilmComments = action.payload.map((comment) => adaptCommentToClient(comment));
      state.isCurrentFilmCommentsLoaded = true;
    });
});

export {reviewData};
