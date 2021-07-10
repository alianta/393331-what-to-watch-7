export const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  MY_LIST: '/mylist',
  FILM: '/film/:id?',
  REVIEW: '/film/:id?/review',
  PLAYER: '/player/:id?',
};

export const TabNames ={
  OVERVIEW: 'Overview',
  DETAILS: 'Details',
  REVIEWS: 'Reviews',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  FILMS: '/films',
  LOGIN: '/login',
  LOGOUT: '/logout',
};

export const SIMILAR_FILM_COUNT = 4;
export const DEFAULT_GENRE = 'All genres';
export const FILMS_LIST_MAX_COUNT = 8;
