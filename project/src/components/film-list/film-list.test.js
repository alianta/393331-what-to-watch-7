import React from 'react';
import {render, screen} from '@testing-library/react';
import FilmList from './film-list';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';

const filmsDataMock = [{
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
},
{
  id: 2,
  title: 'Film2',
  poster: 'img/the-grand-budapest-hotel-poster.jpg',
  previewImage: 'img/the-grand-budapest-hotel.jpg',
  bigImage: 'img/the-grand-budapest-hotel-bg.jpg',
  background: '#ffffff',
  video: 'https://some-link',
  previewVideo: 'https://some-link',
  description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
  ratingScore: 6.3,
  ratingDescription: 'Good',
  ratingCount: 50,
  director: 'Bill Murray',
  starring: ['Bill Murray', 'Edward Norton', 'Jude Law'],
  time: 84,
  genre: 'Comedy',
  year: 2019,
  isFavorite: false,
}];

describe('Component Film-list', () => {
  it('should render Film-list component', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <FilmList films={filmsDataMock}/>
      </Router>,
    );

    expect(screen.getAllByRole('article').length).toBe(filmsDataMock.length);
  });
});
