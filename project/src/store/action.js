export const ActionType = {
  CHANGE_GENRE: 'changeGenre',
  REQUIRED_AUTHORIZATION: 'requiredAuthorization',
  LOGOUT: 'logout',
  LOAD_FILMS: 'loadFilms',
  LOAD_PROMO_FILM: 'loadPromoFilm',
  LOAD_AUTHORIZATION_INFO: 'loadAuthorizationInfo',
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
};
