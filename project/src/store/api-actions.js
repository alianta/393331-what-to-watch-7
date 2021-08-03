import {loadFilms, loadFilmInfo, loadSimilarFilms, redirectToRoute, loadPromoFilm, loadFilmComments, loadAuthorizationInfo, requireAuthorization, logout as logoutAction, changeFilmInfo, loadFavoriteFilms, changeServerErrorStatus} from './action';
import {AuthorizationStatus, AppRoute, APIRoute, HttpCode} from '../const';
import { generatePath } from 'react-router-dom';

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      dispatch(loadFilms(data));
      dispatch(changeServerErrorStatus(false));
    })
    .catch((error) => {
      if(error.response.status !== HttpCode.UNAUTHORIZED) {
        dispatch(changeServerErrorStatus(true));
      }
    })
);

export const fetchFlmInfo = (id) => (dispatch, _getState, api) => (
  api.get(generatePath(APIRoute.FILM_INFO, {id: id}))
    .then(({data}) => dispatch(loadFilmInfo(data)))
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);

export const fetchSimilarFilms = (id) => (dispatch, _getState, api) => (
  api.get(generatePath(APIRoute.SIMILAR_FILMS, {id: id}))
    .then(({data}) => {
      dispatch(loadSimilarFilms(data));
      dispatch(changeServerErrorStatus(false));
    })
    .catch((error) => {
      if(error.response.status !== HttpCode.UNAUTHORIZED) {
        dispatch(changeServerErrorStatus(true));
      }
    })
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => {
      dispatch(loadPromoFilm(data));
      dispatch(changeServerErrorStatus(false));
    })
    .catch((error) => {
      if(error.response.status !== HttpCode.UNAUTHORIZED) {
        dispatch(changeServerErrorStatus(true));
      }
    })
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(generatePath(APIRoute.FILM_COMMENTS, {id: id}))
    .then(({data}) => {
      dispatch(loadFilmComments(data));
      dispatch(changeServerErrorStatus(false));
    })
    .catch((error) => {
      if(error.response.status !== HttpCode.UNAUTHORIZED) {
        dispatch(changeServerErrorStatus(true));
      }
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(loadAuthorizationInfo(data));
      dispatch(changeServerErrorStatus(false));
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((error) => {
      if(error.response.status !== HttpCode.UNAUTHORIZED) {
        dispatch(changeServerErrorStatus(true));
      }
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(loadAuthorizationInfo(data));
      localStorage.setItem('token', data.token);
      dispatch(changeServerErrorStatus(false));
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
    .catch((error) => {
      if(error.response.status !== HttpCode.UNAUTHORIZED) {
        dispatch(changeServerErrorStatus(true));
      }
    })
);

export const addComment = ({rating, comment, filmId}) => (dispatch, _getState, api) => (
  api.post(generatePath(APIRoute.ADD_COMMENT,{filmId:filmId}), {rating, comment})
    .then(({data}) => {
      dispatch(loadFilmComments(data));
      dispatch(changeServerErrorStatus(false));
    })
    .then(() => dispatch(redirectToRoute(generatePath(AppRoute.FILM, {id:filmId}))))
    .catch((error) => {
      if(error.response.status !== HttpCode.UNAUTHORIZED) {
        dispatch(changeServerErrorStatus(true));
      }
    })
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => {
      localStorage.removeItem('token');
      dispatch(changeServerErrorStatus(false));
    })
    .then(() => dispatch(logoutAction()))
    .catch((error) => {
      if(error.response.status !== HttpCode.UNAUTHORIZED) {
        dispatch(changeServerErrorStatus(true));
      }
    })
);

export const changeFilmFavoriteStatus = (filmId, favoriteStatus) => (dispatch, _getState, api) => (
  api.post(generatePath(APIRoute.CHANGE_FILM_FAVORITE_STATUS,{filmId:filmId, status: favoriteStatus}))
    .then(({data}) => {
      dispatch(changeFilmInfo(data));
      dispatch(changeServerErrorStatus(false));
    })
    .catch((error) => {
      if(error.response.status === HttpCode.UNAUTHORIZED) {
        dispatch(redirectToRoute(AppRoute.LOGIN));
      } else {
        dispatch(changeServerErrorStatus(true));
      }
    })
);

export const fetchFavoriteFilms = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => {
      dispatch(loadFavoriteFilms(data));
      dispatch(changeServerErrorStatus(false));
    })
    .catch((error) => {
      if(error.response.status !== HttpCode.UNAUTHORIZED) {
        dispatch(changeServerErrorStatus(true));
      }
    })
);
