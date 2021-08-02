export const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  MY_LIST: '/mylist',
  FILM: '/film/:id?',
  REVIEW: '/film/:id?/review',
  PLAYER: '/player/:id?',
  NOT_FOUND: '/not-found',
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
  FILM_COMMENTS: '/comments/:id',
  PROMO: '/promo',
  LOGIN: '/login',
  LOGOUT: '/logout',
  ADD_COMMENT: '/comments/:filmId',
  CHANGE_FILM_FAVORITE_STATUS: '/favorite/:filmId/:status',
  FAVORITE: '/favorite',
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
export const COMMENT_MAX_LENGTH = 400;
export const COMMENT_MIN_LENGTH = 50;
export const GENRE_LIST_MAX_COUNT = 9;
export const RATING_SCORE_PRECISION = 1;
export const VIDEO_CAN_START_PLAYING_STATE = 3;
export const RATING_STAR_COUNT = 10;

export const HttpCode = {
  UNAUTHORIZED: 401,
};
