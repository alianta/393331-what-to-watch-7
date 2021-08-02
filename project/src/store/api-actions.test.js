import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import {ActionType} from './action';
import {checkAuth, login, fetchFilms, fetchFlmInfo, fetchSimilarFilms, fetchPromoFilm, fetchComments, addComment, changeFilmFavoriteStatus, fetchFavoriteFilms, logout} from './api-actions';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import { generatePath } from 'react-router';

let api = null;
/*eslint-disable */
const filmDataServerMock = {
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
};
/*eslint-enable */

const filmReviewServerMock = {
  id: 1,
  user: {
    id: 4,
    name: 'Kate Muir',
  },
  rating: 8.9,
  comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed movies in years.',
  date: '2019-05-08T14:13:56.569Z',
};

describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, {
        id: 1,
        email: 'Oliver.conner@gmail.com',
        name: 'Oliver.conner',
        token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=',
      });

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1,{
          type: ActionType.LOAD_AUTHORIZATION_INFO,
          payload:  {
            id: 1,
            email: 'Oliver.conner@gmail.com',
            name: 'Oliver.conner',
            token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=',
          },
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_SERVER_ERROR_STATUS,
          payload: false,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it('should make a correct API call to DELETE /logout', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logout();

    Storage.prototype.removeItem = jest.fn();

    apiMock
      .onDelete(APIRoute.LOGOUT)
      .reply(204, [{fake: true}]);

    return logoutLoader(dispatch, jest.fn(() => {}), api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_SERVER_ERROR_STATUS,
          payload: false,
        });
        expect(dispatch).nthCalledWith(2, {
          type: ActionType.LOGOUT,
        });

        expect(Storage.prototype.removeItem).toBeCalledTimes(1);
        expect(Storage.prototype.removeItem).nthCalledWith(1, 'token');
      });
  });

  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: 'test@test.ru', password: '123456'};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, {
        id: 1,
        email: 'test@test.ru',
        name: 'test',
        token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=',
      });

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);

        expect(dispatch).toHaveBeenNthCalledWith(1,{
          type: ActionType.LOAD_AUTHORIZATION_INFO,
          payload:  {
            id: 1,
            email: 'test@test.ru',
            name: 'test',
            token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=',
          },
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_SERVER_ERROR_STATUS,
          payload: false,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.ROOT,
        });
      });
  });

  it('should make a correct API call to GET /films', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = fetchFilms();

    apiMock
      .onGet(APIRoute.FILMS)
      .reply(200, [filmDataServerMock]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: [filmDataServerMock],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_SERVER_ERROR_STATUS,
          payload: false,
        });
      });
  });

  it('should make a correct API call to GET /films/:id', () => {
    const filmId = 1;
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmLoader = fetchFlmInfo(filmId);

    apiMock
      .onGet(generatePath(APIRoute.FILM_INFO, {id: filmId}))
      .reply(200, filmDataServerMock);

    return filmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILM_INFO,
          payload: filmDataServerMock,
        });
      });
  });

  it('should make a correct API call to GET /films/:id/similar', () => {
    const filmId = 1;
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmLoader = fetchSimilarFilms(filmId);

    apiMock
      .onGet(generatePath(APIRoute.SIMILAR_FILMS, {id: filmId}))
      .reply(200, [filmDataServerMock]);

    return filmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_SIMILAR_FILMS,
          payload: [filmDataServerMock],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_SERVER_ERROR_STATUS,
          payload: false,
        });
      });
  });

  it('should make a correct API call to GET /promo', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmLoader = fetchPromoFilm();

    apiMock
      .onGet(APIRoute.PROMO)
      .reply(200, filmDataServerMock);

    return filmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO_FILM,
          payload: filmDataServerMock,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_SERVER_ERROR_STATUS,
          payload: false,
        });
      });
  });

  it('should make a correct API call to GET /comments/:filmId', () => {
    const filmId = 1;
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentsLoader = fetchComments(filmId);

    apiMock
      .onGet(generatePath(APIRoute.FILM_COMMENTS, {id: filmId}))
      .reply(200, [filmReviewServerMock]);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILM_COMMENTS,
          payload: [filmReviewServerMock],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_SERVER_ERROR_STATUS,
          payload: false,
        });
      });
  });

  it('should make a correct API call to POST /comments/:filmId', () => {
    const filmId = 1;
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeComment = {
      rating: 8.9,
      comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed movies in years.',
      filmId: filmId,
    };
    const addCommentLoader = addComment(fakeComment);

    apiMock
      .onPost(generatePath(APIRoute.ADD_COMMENT,{filmId:filmId}))
      .reply(200, filmReviewServerMock);

    return addCommentLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1,{
          type: ActionType.LOAD_FILM_COMMENTS,
          payload:  filmReviewServerMock,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_SERVER_ERROR_STATUS,
          payload: false,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: generatePath(AppRoute.FILM, {id:filmId}),
        });
      });
  });

  it('should make a correct API call to POST /favorite/:filmId/:status', () => {
    const filmId = 1;
    const favoriteStatus = 1;
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const changeFilmFavoriteStatusLoader = changeFilmFavoriteStatus(filmId,favoriteStatus);

    apiMock
      .onPost(generatePath(APIRoute.CHANGE_FILM_FAVORITE_STATUS,{filmId: filmId, status: favoriteStatus}))
      .reply(200, filmDataServerMock);

    return changeFilmFavoriteStatusLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1,{
          type: ActionType.CHANGE_FILM_INFO,
          payload:  filmDataServerMock,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_SERVER_ERROR_STATUS,
          payload: false,
        });
      });
  });

  it('should make a correct API call to GET /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = fetchFavoriteFilms();

    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(200, [filmDataServerMock]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_FILMS,
          payload: [filmDataServerMock],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_SERVER_ERROR_STATUS,
          payload: false,
        });
      });
  });
});
