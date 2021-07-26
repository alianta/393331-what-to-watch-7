import {AuthorizationStatus} from '../../const';
import {createReducer} from '@reduxjs/toolkit';
import {requireAuthorization, loadAuthorizationInfo, logout, loadFavoriteFilms} from '../action';
import {adaptFilmToClient} from '../adapter';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  authorizationInfo: {},
  favoriteFilms: [],
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(logout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    })
    .addCase(loadAuthorizationInfo, (state, action) => {
      state.authorizationInfo = action.payload;
    })
    .addCase(loadFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload.map((film) => adaptFilmToClient(film));
    });
});

export {user};
