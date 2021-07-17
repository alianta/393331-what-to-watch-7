export const ActionType = {
  CHANGE_GENRE: 'changeGenre',
  REQUIRED_AUTHORIZATION: 'requiredAuthorization',
  LOGOUT: 'logout',
  LOAD_FILMS: 'loadFilms',
  LOAD_FILM_INFO: 'loadFilmInfo',
  LOAD_PROMO_FILM: 'loadPromoFilm',
  LOAD_AUTHORIZATION_INFO: 'loadAuthorizationInfo',
  REDIRECT_TO_ROUTE: 'redirectToRoute',
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  loadFilmInfo: (film) => ({
    type: ActionType.LOAD_FILM_INFO,
    payload: film,
  }),
  loadAuthorizationInfo: (authorizationInfo) => ({
    type: ActionType.LOAD_AUTHORIZATION_INFO,
    payload: authorizationInfo,
  }),
  loadPromoFilm: (film) => ({
    type: ActionType.LOAD_PROMO_FILM,
    payload: film,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};
