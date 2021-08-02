import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus, AppRoute, DEFAULT_GENRE} from '../../const';
import App from './app';

let history = null;
let store = null;
let fakeApp = null;
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

const currentFilmCommentsMock = [{
  id: 1,
  userId: 4,
  text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed movies in years.',
  author: 'Kate Muir',
  date: '2019-05-08T14:13:56.569Z',
  ratingScore: 8.9,
}];

describe('Application Routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});
    store = createFakeStore({
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
      REVIEW: {
        currentFilmComments: currentFilmCommentsMock,
        isCurrentFilmCommentsLoaded: true,
      },
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        authorizationInfo: {
          id: 1,
          email: 'Oliver.conner@gmail.com',
          name: 'Oliver.conner',
          avatarUrl: 'img/1.png',
          token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=;',
        },
        favoriteFilms: [filmDataMock],
      },
      SERVER: {
        isServerError: false,
      },
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });

  it('should render "main-page" when user navigate to "/"', () => {
    history.push(AppRoute.ROOT);
    render(fakeApp);

    expect(screen.getByTestId('filmCardInfo')).toHaveTextContent(filmDataMock.title);
    expect(screen.getByTestId('filmCardInfo')).toHaveTextContent(filmDataMock.genre);
    expect(screen.getByTestId('filmCardInfo')).toHaveTextContent(filmDataMock.year);
    expect(screen.getByTestId('filmCardInfo')).toHaveTextContent('Play');
    expect(screen.getByTestId('filmCardInfo')).toHaveTextContent('My list');
    expect(screen.getByTestId('catalog')).toHaveTextContent('Catalog');
    expect(screen.getByTestId('catalog')).toHaveTextContent('All genres');
    expect(screen.getByTestId('catalog')).toHaveTextContent(filmDataMock.genre);
    expect(screen.getByTestId('catalog')).toHaveTextContent(filmDataMock.title);
    expect(screen.getByTestId('catalog')).not.toHaveTextContent('Show more');
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');
    render(fakeApp);

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    expect(screen.getByText('Вернуться на главную')).toBeInTheDocument();
  });

  it('should render "Sing-in" when user navigate to "/login"', () => {
    history.push(AppRoute.LOGIN);
    render(fakeApp);

    expect(screen.getByLabelText('Email address')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('should render "Review" when user navigate to "/film/:id?/review"', () => {
    history.push(`/film/${filmDataMock.id}/review`);
    render(fakeApp);

    expect(screen.getByText('WTW')).toBeInTheDocument();
    expect(screen.getByText(filmDataMock.title)).toBeInTheDocument();
    expect(screen.getByText('Add review')).toBeInTheDocument();
  });
});
