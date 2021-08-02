import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../const';
import { Provider } from 'react-redux';
import * as Redux from 'react-redux';
import MyList from './my-list';

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

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const createFakeStore = configureStore({});
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);
    const store = createFakeStore({
      FILM: {},
      REVIEW: {},
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

    const {getByText} = render(
      <Provider store={store}>
        <Router history={history}>
          <MyList />
        </Router>
      </Provider>,
    );

    expect(getByText('My list')).toBeInTheDocument();
    expect(getByText('Catalog')).toBeInTheDocument();
  });
});
