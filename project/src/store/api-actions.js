import {loadFilms, loadFilmInfo, loadSimilarFilms, redirectToRoute, loadPromoFilm, loadFilmComments, loadAuthorizationInfo, requireAuthorization, logout as logoutAction, changeFilmInfo, loadFavoriteFilms} from './action';
import {AuthorizationStatus, AppRoute, APIRoute, HttpCode} from '../const';
import { generatePath } from 'react-router';

export const fetchFlms = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(loadFilms(data)))
);

export const fetchFlmInfo = (id) => (dispatch, _getState, api) => (
  api.get(generatePath(APIRoute.FILM_INFO, {id: id}))
    .then(({data}) => dispatch(loadFilmInfo(data)))
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);

export const fetchSimilarFilms = (id) => (dispatch, _getState, api) => (
  api.get(generatePath(APIRoute.SIMILAR_FILMS, {id: id}))
    .then(({data}) => dispatch(loadSimilarFilms(data)))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => dispatch(loadPromoFilm(data)))
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(generatePath(APIRoute.FILM_COMMENTS, {id: id}))
    .then(({data}) => dispatch(loadFilmComments(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(loadAuthorizationInfo(data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(loadAuthorizationInfo(data));
      localStorage.setItem('token', data.token);
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);

export const addComment = ({rating, comment, filmId}) => (dispatch, _getState, api) => (
  api.post(generatePath(APIRoute.ADD_COMMENT,{filmId:filmId}), {rating, comment})
    .then(({data}) => dispatch(loadFilmComments(data)))
    .then(() => dispatch(redirectToRoute(generatePath(AppRoute.FILM, {id:filmId}))))
    .catch(() => {})
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(logoutAction()))
);

export const changeFilmFavoriteStatus = (filmId, favoriteStatus) => (dispatch, _getState, api) => (
  api.post(generatePath(APIRoute.CHANGE_FILM_FAVORITE_STAUS,{filmId:filmId, status: favoriteStatus}))
    .then(({data}) => dispatch(changeFilmInfo(data)))
    .catch((error) => {
      if(error.response.status === HttpCode.UNAUTHORIZED) {
        dispatch(redirectToRoute(AppRoute.LOGIN));
      }
    })
);

export const fetchFavoriteFilms = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => dispatch(loadFavoriteFilms(data)))
);
