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
export const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre,
});

export const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films,
});

export const loadSimilarFilms = (films) => ({
  type: ActionType.LOAD_SIMILAR_FILMS,
  payload: films,
});

export const loadFilmComments = (films) => ({
  type: ActionType.LOAD_FILM_COMMENTS,
  payload: films,
});

export const loadFilmInfo = (film) => ({
  type: ActionType.LOAD_FILM_INFO,
  payload: film,
});

export const loadAuthorizationInfo = (authorizationInfo) => ({
  type: ActionType.LOAD_AUTHORIZATION_INFO,
  payload: authorizationInfo,
});

export const loadPromoFilm = (film) => ({
  type: ActionType.LOAD_PROMO_FILM,
  payload: film,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const logout = () => ({
  type: ActionType.LOGOUT,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
