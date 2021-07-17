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
  FILM_INFO: '/films/:id',
  SIMILAR_FILMS: '/films/:id/similar',
  PROMO: '/promo',
  LOGIN: '/login',
  LOGOUT: '/logout',
};

export const SIMILAR_FILM_COUNT = 4;
export const DEFAULT_GENRE = 'All genres';
export const FILMS_LIST_MAX_COUNT = 8;

export const MAX_BAD_RATING_SCORE = 3;
export const MAX_NORMAL_RATING_SCORE = 5;
export const MAX_GOOD_RATING_SCORE = 8;
export const MAX_VERY_GOOD_RATING_SCORE = 8;
export const BAD_RATING = 'Bad';
export const NORMAL_RATING = 'Normal';
export const GOOD_RATING = 'Good';
export const VERY_GOOD_RATING = 'Very good';
export const AWESOME_RATING = 'Awesome';
export const PROMO_FILM_ID = -1;
