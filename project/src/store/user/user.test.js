import {user} from './user';
import {ActionType} from '../action';
import {AuthorizationStatus} from '../../const';

/*eslint-disable */
const favoriteFilmsServerMock = [
  {
    id: 1,
    name: 'The Grand Budapest Hotel',
    poster_image: 'img/the-grand-budapest-hotel-poster.jpg',
    preview_image: 'img/the-grand-budapest-hotel.jpg',
    background_image: 'img/the-grand-budapest-hotel-bg.jpg',
    background_color: '#ffffff',
    video_link: 'https://some-link',
    preview_video_link: 'https://some-link',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 6.9,
    scores_count: 240,
    director: 'Wes Andreson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    run_time: 99,
    genre: 'Drama',
    released: 2014,
    is_favorite: true,
  }];
/*eslint-enable */

const favoriteFilmsMock = [
  {
    id: 1,
    title: 'The Grand Budapest Hotel',
    poster: 'img/the-grand-budapest-hotel-poster.jpg',
    previewImage: 'img/the-grand-budapest-hotel.jpg',
    bigImage: 'img/the-grand-budapest-hotel-bg.jpg',
    background: '#ffffff',
    video: 'https://some-link',
    previewVideo: 'https://some-link',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    ratingScore: 6.9,
    ratingDescription: 'Good',
    ratingCount: 240,
    director: 'Wes Andreson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    time: 99,
    genre: 'Drama',
    year: 2014,
    isFavorite: true,
  }];

describe('Reducer: user', () => {
  it('should update authorizationStatus to "AUTH" on requireAuthorization action', () => {
    const unknownState = {authorizationStatus: AuthorizationStatus.UNKNOWN};
    const noAuthState = {authorizationStatus: AuthorizationStatus.NO_AUTH};
    const authState = {authorizationStatus: AuthorizationStatus.AUTH};

    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(user(unknownState, requiredAuthorizationAction))
      .toEqual({authorizationStatus: AuthorizationStatus.AUTH});

    expect(user(noAuthState, requiredAuthorizationAction))
      .toEqual({authorizationStatus: AuthorizationStatus.AUTH});

    expect(user(authState, requiredAuthorizationAction))
      .toEqual({authorizationStatus: AuthorizationStatus.AUTH});
  });

  it('should update authorizationStatus to "NO_AUTH" on logout action', () => {
    const unknownState = {authorizationStatus: AuthorizationStatus.UNKNOWN};
    const noAuthState = {authorizationStatus: AuthorizationStatus.NO_AUTH};
    const authState = {authorizationStatus: AuthorizationStatus.AUTH};

    const logoutAction = {
      type: ActionType.LOGOUT,
      payload: AuthorizationStatus.NO_AUTH,
    };

    expect(user(unknownState, logoutAction))
      .toEqual({authorizationStatus: AuthorizationStatus.NO_AUTH});

    expect(user(noAuthState, logoutAction))
      .toEqual({authorizationStatus: AuthorizationStatus.NO_AUTH});

    expect(user(authState, logoutAction))
      .toEqual({authorizationStatus: AuthorizationStatus.NO_AUTH});
  });

  it('should update authorization information on loadAuthorizationInfo action', () => {
    const authState = {authorizationStatus: AuthorizationStatus.AUTH};

    const loadAuthorizationInfo = {
      type: ActionType.LOAD_AUTHORIZATION_INFO,
      payload: {
        id: 1,
        email: 'Oliver.conner@gmail.com',
        name: 'Oliver.conner',
        avatarUrl: 'img/1.png',
        token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=;',
      },
    };

    expect(user(authState, loadAuthorizationInfo))
      .toEqual({
        authorizationStatus: AuthorizationStatus.AUTH,
        authorizationInfo: {
          id: 1,
          email: 'Oliver.conner@gmail.com',
          name: 'Oliver.conner',
          avatarUrl: 'img/1.png',
          token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=;',
        },
      });
  });

  it('should update favoriteFilms by load favorite gilms', () => {
    const state = {authorizationStatus: AuthorizationStatus.AUTH, favoriteFilms: []};
    const loadFavoriteFilmsAction = {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: favoriteFilmsServerMock,
    };

    expect(user(state, loadFavoriteFilmsAction))
      .toEqual({favoriteFilms: favoriteFilmsMock, authorizationStatus: AuthorizationStatus.AUTH});
  });
});
