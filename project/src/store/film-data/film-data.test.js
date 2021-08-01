import {filmData} from './film-data';
import {ActionType} from '../action';
import {AuthorizationStatus} from '../../const';

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

const filmDataMock = {
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
};

describe('Reducer: film-data', () => {
  it('should update currentFilm by load loadFilmInfo action', () => {
    const stateUnknown = {authorizationStatus: AuthorizationStatus.UNKNOWN, currentFilm: {}};
    const stateNoAuth = {authorizationStatus: AuthorizationStatus.NO_AUTH, currentFilm: {}};
    const stateAuth = {authorizationStatus: AuthorizationStatus.AUTH, currentFilm: {}};

    const loadFilmInfoAction = {
      type: ActionType.LOAD_FILM_INFO,
      payload: filmDataServerMock,
    };

    expect(filmData(stateUnknown, loadFilmInfoAction))
      .toEqual({
        currentFilm: filmDataMock,
        authorizationStatus: AuthorizationStatus.UNKNOWN,
        isDataLoaded: true,
        isFilmDataLoaded: true,
      });
    expect(filmData(stateNoAuth, loadFilmInfoAction))
      .toEqual({
        currentFilm: filmDataMock,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        isDataLoaded: true,
        isFilmDataLoaded: true,
      });
    expect(filmData(stateAuth, loadFilmInfoAction))
      .toEqual({
        currentFilm: filmDataMock,
        authorizationStatus: AuthorizationStatus.AUTH,
        isDataLoaded: true,
        isFilmDataLoaded: true,
      });
  });

  it('should update promoFilm by load loadPromoFilm action', () => {
    const stateUnknown = {authorizationStatus: AuthorizationStatus.UNKNOWN, promoFilm: {}};
    const stateNoAuth = {authorizationStatus: AuthorizationStatus.NO_AUTH, promoFilm: {}};
    const stateAuth = {authorizationStatus: AuthorizationStatus.AUTH, promoFilm: {}};

    const loadPromoFilmAction = {
      type: ActionType.LOAD_PROMO_FILM,
      payload: filmDataServerMock,
    };

    expect(filmData(stateUnknown, loadPromoFilmAction))
      .toEqual({
        promoFilm: {
          ...filmDataMock,
          id: -1,
        },
        authorizationStatus: AuthorizationStatus.UNKNOWN,
        isFilmOfDayLoaded: true,
      });
    expect(filmData(stateNoAuth, loadPromoFilmAction))
      .toEqual({
        promoFilm: {
          ...filmDataMock,
          id: -1,
        },
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        isFilmOfDayLoaded: true,
      });
    expect(filmData(stateAuth, loadPromoFilmAction))
      .toEqual({
        promoFilm: {
          ...filmDataMock,
          id: -1,
        },
        authorizationStatus: AuthorizationStatus.AUTH,
        isFilmOfDayLoaded: true,
      });
  });

  it('should load similarFilms by load loadSimilarFilms action', () => {
    const stateUnknown = {authorizationStatus: AuthorizationStatus.UNKNOWN, similarFilms: []};
    const stateNoAuth = {authorizationStatus: AuthorizationStatus.NO_AUTH, similarFilms: []};
    const stateAuth = {authorizationStatus: AuthorizationStatus.AUTH, similarFilms: []};

    const loadSimilarFilmsAction = {
      type: ActionType.LOAD_SIMILAR_FILMS,
      payload: [filmDataServerMock],
    };

    expect(filmData(stateUnknown, loadSimilarFilmsAction))
      .toEqual({
        similarFilms: [filmDataMock],
        authorizationStatus: AuthorizationStatus.UNKNOWN,
        isSimilarFilmsLoaded: true,
      });
    expect(filmData(stateNoAuth, loadSimilarFilmsAction))
      .toEqual({
        similarFilms: [filmDataMock],
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        isSimilarFilmsLoaded: true,
      });
    expect(filmData(stateAuth, loadSimilarFilmsAction))
      .toEqual({
        similarFilms: [filmDataMock],
        authorizationStatus: AuthorizationStatus.AUTH,
        isSimilarFilmsLoaded: true,
      });
  });

  it('should load films by loadFilms action', () => {
    const stateUnknown = {authorizationStatus: AuthorizationStatus.UNKNOWN, films: []};
    const stateNoAuth = {authorizationStatus: AuthorizationStatus.NO_AUTH, films: []};
    const stateAuth = {authorizationStatus: AuthorizationStatus.AUTH, films: []};

    const loadFilmsAction = {
      type: ActionType.LOAD_FILMS,
      payload: [filmDataServerMock],
    };

    expect(filmData(stateUnknown, loadFilmsAction))
      .toEqual({
        films: [filmDataMock],
        authorizationStatus: AuthorizationStatus.UNKNOWN,
        isDataLoaded: true,
      });
    expect(filmData(stateNoAuth, loadFilmsAction))
      .toEqual({
        films: [filmDataMock],
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        isDataLoaded: true,
      });
    expect(filmData(stateAuth, loadFilmsAction))
      .toEqual({
        films: [filmDataMock],
        authorizationStatus: AuthorizationStatus.AUTH,
        isDataLoaded: true,
      });
  });

  it('should change genre by changeGenre action', () => {
    const stateUnknown = {authorizationStatus: AuthorizationStatus.UNKNOWN};
    const stateNoAuth = {authorizationStatus: AuthorizationStatus.NO_AUTH};
    const stateAuth = {authorizationStatus: AuthorizationStatus.AUTH};

    const changeGenreAction = {
      type: ActionType.CHANGE_GENRE,
      payload: 'Drama',
    };

    expect(filmData(stateUnknown, changeGenreAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.UNKNOWN,
        genre: 'Drama',
      });
    expect(filmData(stateNoAuth, changeGenreAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        genre: 'Drama',
      });
    expect(filmData(stateAuth, changeGenreAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.AUTH,
        genre: 'Drama',
      });
  });

  it('should change film information in currentFilm by changeFilmInfo action', () => {
    const  promoFilmMock = {
      ...filmDataMock,
      id:1000,
    };
    const stateUnknown = {
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      currentFilm: filmDataMock,
      promoFilm: promoFilmMock,
      films: [filmDataMock],
    };
    const stateNoAuth = {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      currentFilm: filmDataMock,
      promoFilm: promoFilmMock,
      films: [filmDataMock],
    };
    const stateAuth = {
      authorizationStatus: AuthorizationStatus.AUTH,
      currentFilm: filmDataMock,
      promoFilm: promoFilmMock,
      films: [filmDataMock],
    };

    const changeFilmInfoAction = {
      type: ActionType.CHANGE_FILM_INFO,
      payload: filmDataServerMock,
    };

    expect(filmData(stateUnknown, changeFilmInfoAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.UNKNOWN,
        currentFilm: filmDataMock,
        films: [filmDataMock],
        promoFilm: promoFilmMock,
      });
    expect(filmData(stateNoAuth, changeFilmInfoAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        currentFilm: filmDataMock,
        films: [filmDataMock],
        promoFilm: promoFilmMock,
      });
    expect(filmData(stateAuth, changeFilmInfoAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.AUTH,
        currentFilm: filmDataMock,
        films: [filmDataMock],
        promoFilm: promoFilmMock,
      });
  });
  it('should change film information in promoFilm by changeFilmInfo action', () => {
    const  currentFilmMock = {
      ...filmDataMock,
      id:1000,
    };
    const stateUnknown = {
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      currentFilm: currentFilmMock,
      promoFilm: filmDataMock,
      films: [filmDataMock],
    };
    const stateNoAuth = {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      currentFilm: currentFilmMock,
      promoFilm: filmDataMock,
      films: [filmDataMock],
    };
    const stateAuth = {
      authorizationStatus: AuthorizationStatus.AUTH,
      currentFilm: currentFilmMock,
      promoFilm: filmDataMock,
      films: [filmDataMock],
    };

    const changeFilmInfoAction = {
      type: ActionType.CHANGE_FILM_INFO,
      payload: filmDataServerMock,
    };

    expect(filmData(stateUnknown, changeFilmInfoAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.UNKNOWN,
        currentFilm: currentFilmMock,
        promoFilm: filmDataMock,
        films: [filmDataMock],
      });
    expect(filmData(stateNoAuth, changeFilmInfoAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        currentFilm: currentFilmMock,
        promoFilm: filmDataMock,
        films: [filmDataMock],
      });
    expect(filmData(stateAuth, changeFilmInfoAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.AUTH,
        currentFilm: currentFilmMock,
        promoFilm: filmDataMock,
        films: [filmDataMock],
      });
  });
});
