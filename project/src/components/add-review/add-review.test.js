import React from 'react';
import {render} from '@testing-library/react';
import AddReview from './add-review';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {Router, Route} from 'react-router-dom';
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

describe('Component AddReview', () => {
  it('should render AddReview component', () => {
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

    history.push('/film/1/review');

    const {getByText} = render(
      <Provider store={store}>
        <Router history={history}>
          <Route path={AppRoute.REVIEW}>
            <AddReview id={filmDataMock.id}/>
          </Route>
        </Router>
      </Provider>);

    expect(getByText('WTW')).toBeInTheDocument();
    expect(getByText(filmDataMock.title)).toBeInTheDocument();
    expect(getByText('Add review')).toBeInTheDocument();
  });
});
