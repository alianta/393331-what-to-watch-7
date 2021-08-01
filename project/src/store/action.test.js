import {ActionType, changeGenre, loadFilms, loadSimilarFilms, loadFilmComments, loadFilmInfo, loadAuthorizationInfo, loadPromoFilm, requireAuthorization, redirectToRoute, changeFilmInfo, loadFavoriteFilms} from './action';

describe('Actions', () => {
  it('action creator for change genre returns correct action', () => {
    const mockData = 'drama';

    const expectedAction = {
      type: ActionType.CHANGE_GENRE,
      payload: mockData,
    };

    expect(changeGenre(mockData)).toEqual(expectedAction);
  });

  it('action creator for load films returns correct action', () => {
    const mockData = [
      {
        id: 1,
        title: 'Film name 1',
      },
      {
        id: 2,
        title: 'Film name 2',
      },
    ];

    const expectedAction = {
      type: ActionType.LOAD_FILMS,
      payload: mockData,
    };

    expect(loadFilms(mockData)).toEqual(expectedAction);
  });

  it('action creator for load similar films returns correct action', () => {
    const mockData = [
      {
        id: 1,
        title: 'Film name 1',
      },
      {
        id: 2,
        title: 'Film name 2',
      },
    ];

    const expectedAction = {
      type: ActionType.LOAD_SIMILAR_FILMS,
      payload: mockData,
    };

    expect(loadSimilarFilms(mockData)).toEqual(expectedAction);
  });

  it('action creator for load film comments returns correct action', () => {
    const mockData = [
      {
        id: 1,
        text: 'good film',
        author: 'keks',
      },
      {
        id: 2,
        text: 'hohoho',
        author: 'robot',
      },
    ];

    const expectedAction = {
      type: ActionType.LOAD_FILM_COMMENTS,
      payload: mockData,
    };

    expect(loadFilmComments(mockData)).toEqual(expectedAction);
  });

  it('action creator for load film information returns correct action', () => {
    const mockData = {
      id: 1,
      title: 'Film name',
      genre: 'comedy',
    };

    const expectedAction = {
      type: ActionType.LOAD_FILM_INFO,
      payload: mockData,
    };

    expect(loadFilmInfo(mockData)).toEqual(expectedAction);
  });

  it('action creator for load authorization information returns correct action', () => {
    const mockData = {
      id: 1,
      email: 'Oliver.conner@gmail.com',
      name: 'Oliver.conner',
      avatarUrl: 'img/1.png',
      token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=',
    };

    const expectedAction = {
      type: ActionType.LOAD_AUTHORIZATION_INFO,
      payload: mockData,
    };

    expect(loadAuthorizationInfo(mockData)).toEqual(expectedAction);
  });

  it('action creator for load promo film returns correct action', () => {
    const mockData = {
      id: 1,
      name: 'The Grand Budapest Hotel',
      posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
      previewImage: 'img/the-grand-budapest-hotel.jpg',
      backgroundImage: 'img/the-grand-budapest-hotel-bg.jpg',
      backgroundColor: '#ffffff',
      videoLink: 'https://some-link',
      previewVideoLink: 'https://some-link',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
      rating: 8.9,
      scoresCount: 240,
      director: 'Wes Andreson',
      starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
      runTime: 99,
      genre: 'Comedy',
      released: 2014,
      isFavorite: false,
    };

    const expectedAction = {
      type: ActionType.LOAD_PROMO_FILM,
      payload: mockData,
    };

    expect(loadPromoFilm(mockData)).toEqual(expectedAction);
  });

  it('action creator for required authorization returns correct action', () => {
    const mockData = 'AUTH';

    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: mockData,
    };

    expect(requireAuthorization(mockData)).toEqual(expectedAction);
  });

  it('action creator for redirect to rote correct action', () => {
    const mockData = 'url';

    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: mockData,
    };

    expect(redirectToRoute(mockData)).toEqual(expectedAction);
  });

  it('action creator for change film information correct action', () => {
    const mockData = {
      id: 1,
      title: 'Film name',
      genre: 'comedy',
    };

    const expectedAction = {
      type: ActionType.CHANGE_FILM_INFO,
      payload: mockData,
    };

    expect(changeFilmInfo(mockData)).toEqual(expectedAction);
  });

  it('action creator for load favorite films correct action', () => {
    const mockData = [
      {
        id: 1,
        title: 'Film name 1',
      },
      {
        id: 2,
        title: 'Film name 2',
      },
    ];

    const expectedAction = {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: mockData,
    };

    expect(loadFavoriteFilms(mockData)).toEqual(expectedAction);
  });
});
