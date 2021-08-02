import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import AddReviewForm from './add-review-form';
import userEvent from '@testing-library/user-event';
import { APIRoute, RATING_STAR_COUNT} from '../../const';


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

describe('Component: Add-review-form', () => {
  it('should render Add-review-form correctly', () => {
    const mockStore = configureStore({});
    const history = createMemoryHistory();
    history.push(APIRoute.ADD_COMMENT,{filmId:filmDataMock.id});

    render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <AddReviewForm
            onReview = {() => {}}
            film = {filmDataMock}
          />
        </Router>
      </Provider>,
    );

    expect(screen.getAllByLabelText(/Rating/i).length).toBe(RATING_STAR_COUNT);
    userEvent.type(screen.getByTestId('review-text'), 'mock text data');
    expect(screen.getByDisplayValue('mock text data')).toBeInTheDocument();
  });
});
