import React from 'react';
import {render, screen} from '@testing-library/react';
import MainPage from './main-page';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {Router} from 'react-router-dom';
import {AuthorizationStatus, DEFAULT_GENRE, AppRoute} from '../../const';

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

describe('Component Main-Page', () => {
  it('should render Main-Page component', () => {
    const history = createMemoryHistory();
    const createFakeStore = configureStore({});
    const store = createFakeStore({
      FILM: {
        genre: DEFAULT_GENRE,
        films: [filmDataMock],
        similarFilms: [filmDataMock],
        promoFilm: filmDataMock,
        currentFilm: filmDataMock,
        isDataLoaded: true,
        isFilmDataLoaded: true,
        isSimilarFilmsLoaded: true,
        isFilmOfDayLoaded: true,
      },
      REVIEW: {},
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        favoriteFilms: [filmDataMock],
        authorizationInfo: {
          id: 1,
          email: 'Oliver.conner@gmail.com',
          name: 'Oliver.conner',
          avatarUrl: 'img/1.png',
          token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=;',
        },
      },
      SERVER: {
        isServerError: false,
      },
    });

    history.push(AppRoute.ROOT);

    const {getByText} = render(
      <Provider store={store}>
        <Router history={history}>
          <MainPage/>
        </Router>
      </Provider>);

    expect(getByText('WTW')).toBeInTheDocument();
    expect(
      screen.getAllByText((_content, el) => el.textContent === filmDataMock.title),
    ).toHaveLength(5);
    expect(
      screen.getAllByText((_content, el) => el.textContent === filmDataMock.genre),
    ).toHaveLength(3);
    expect(getByText(filmDataMock.year)).toBeInTheDocument();
    expect(getByText('Play')).toBeInTheDocument();
    expect(getByText('My list')).toBeInTheDocument();
    expect(getByText('Catalog')).toBeInTheDocument();
  });
});
