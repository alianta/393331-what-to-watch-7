import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_GENRE: 'changeGenre',
  REQUIRED_AUTHORIZATION: 'requiredAuthorization',
  LOGOUT: 'logout',
  LOAD_FILMS: 'loadFilms',
  LOAD_SIMILAR_FILMS: 'loadSimilarFilms',
  LOAD_FILM_INFO: 'loadFilmInfo',
  LOAD_PROMO_FILM: 'loadPromoFilm',
  LOAD_FILM_COMMENTS: 'loadFilmComments',
  LOAD_AUTHORIZATION_INFO: 'loadAuthorizationInfo',
  REDIRECT_TO_ROUTE: 'redirectToRoute',
};

export const changeGenre = createAction((genre) => ({
  payload: genre,
}));

export const loadFilms =  createAction(ActionType.LOAD_FILMS, (films) => ({
  payload: films,
}));

export const loadSimilarFilms = createAction(ActionType.LOAD_SIMILAR_FILMS, (films) => ({
  payload: films,
}));

export const loadFilmComments = createAction(ActionType.LOAD_FILM_COMMENTS, (films) => ({
  payload: films,
}));

export const loadFilmInfo = createAction(ActionType.LOAD_FILM_INFO, (film) => ({
  payload: film,
}));

export const loadAuthorizationInfo = createAction(ActionType.LOAD_AUTHORIZATION_INFO, (authorizationInfo) => ({
  payload: authorizationInfo,
}));

export const loadPromoFilm = createAction(ActionType.LOAD_PROMO_FILM, (film) => ({
  payload: film,
}));

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status)=> ({
  payload: status,
}));

export const logout = createAction(ActionType.LOGOUT);

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));
