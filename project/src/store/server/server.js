import {createReducer} from '@reduxjs/toolkit';
import {changeServerErrorStatus} from '../action';

const initialState = {
  isServerError: false,
};

const server = createReducer(initialState, (builder) => {
  builder
    .addCase(changeServerErrorStatus, (state, action) => {
      state.isServerError =  action.payload;
    });
});

export {server};
