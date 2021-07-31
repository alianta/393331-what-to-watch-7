import React from 'react';
import {render} from '@testing-library/react';
import FilmCard from './film-card';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';

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

describe('Conponent Film-card', () => {
  it('should render Film-card compotent', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <FilmCard film={filmDataMock}/>
      </Router>,
    );

    expect(getByText(filmDataMock.title)).toBeInTheDocument();

  });
});
