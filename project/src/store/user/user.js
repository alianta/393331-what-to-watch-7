import {AuthorizationStatus} from '../../const';
import {createReducer} from '@reduxjs/toolkit';
import {requireAuthorization, loadAuthorizationInfo, logout} from '../action';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  authorizationInfo: {},
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
    });
});

export {user};
