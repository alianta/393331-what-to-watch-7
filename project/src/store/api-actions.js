import {ActionCreator} from './action';
import {AuthorizationStatus, AppRoute, APIRoute} from '../const';
import { generatePath } from 'react-router';

export const fetchFlms = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(ActionCreator.loadFilms(data)))
);

export const fetchFlmInfo = (id) => (dispatch, _getState, api) => (
  api.get(generatePath(APIRoute.FILM_INFO, {id: id}))
    .then(({data}) => dispatch(ActionCreator.loadFilmInfo(data)))
    .catch(()=>dispatch(ActionCreator.redirectToRoute(AppRoute.NOT_FOUND)))
);

export const fetchSimilarFilms = (id) => (dispatch, _getState, api) => (
  api.get(generatePath(APIRoute.SIMILAR_FILMS, {id: id}))
    .then(({data}) => dispatch(ActionCreator.loadSimilarFilms(data)))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => dispatch(ActionCreator.loadPromoFilm(data)))
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(generatePath(APIRoute.FILM_COMMENTS, {id: id}))
    .then(({data}) => dispatch(ActionCreator.loadFilmComments(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(ActionCreator.loadAuthorizationInfo(data)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(ActionCreator.loadAuthorizationInfo(data));
      localStorage.setItem('token', data.token);
    })
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
);

export const addComment = ({rating, comment, filmId}) => (dispatch, _getState, api) => (
  api.post(generatePath(APIRoute.ADD_COMMENT,{filmId:filmId}), {rating, comment})
    .then(({data}) => dispatch(ActionCreator.loadFilmComments(data)))
    .then(() => dispatch(ActionCreator.redirectToRoute(generatePath(AppRoute.FILM,{id:filmId}))))
    .catch(()=>{})
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);
