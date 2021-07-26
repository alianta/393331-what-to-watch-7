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
  CHANGE_FILM_INFO: 'changeFilmInfo',
  LOAD_FAVORITE_FILMS: 'loadFavoriteFilms',
};

export const changeGenre = createAction(ActionType.CHANGE_GENRE);
export const loadFilms =  createAction(ActionType.LOAD_FILMS);
export const loadSimilarFilms = createAction(ActionType.LOAD_SIMILAR_FILMS);
export const loadFilmComments = createAction(ActionType.LOAD_FILM_COMMENTS);
export const loadFilmInfo = createAction(ActionType.LOAD_FILM_INFO);
export const loadAuthorizationInfo = createAction(ActionType.LOAD_AUTHORIZATION_INFO);
export const loadPromoFilm = createAction(ActionType.LOAD_PROMO_FILM);
export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION);
export const logout = createAction(ActionType.LOGOUT);
export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE);
export const changeFilmInfo = createAction(ActionType.CHANGE_FILM_INFO);
export const loadFavoriteFilms = createAction(ActionType.LOAD_FAVORITE_FILMS);
