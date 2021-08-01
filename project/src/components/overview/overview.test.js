import React from 'react';
import {render} from '@testing-library/react';
import Overview from './overview';
import {RATING_SCORE_PRECISION} from '../../const';

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

describe('Component Overview', () => {
  it('should render Overview component', () => {
    const {getByText} = render(<Overview film={filmDataMock}/>);

    expect(getByText(filmDataMock.ratingScore.toFixed(RATING_SCORE_PRECISION))).toBeInTheDocument();
    expect(getByText(filmDataMock.ratingDescription)).toBeInTheDocument();
    expect(getByText(`${filmDataMock.ratingCount} ratings`)).toBeInTheDocument();
    expect(getByText(filmDataMock.description)).toBeInTheDocument();
    expect(getByText(`Director: ${filmDataMock.director}`)).toBeInTheDocument();
    filmDataMock.starring.forEach((star) => {
      expect(getByText(star, { exact : false })).toBeInTheDocument();
    });
    expect(getByText(/ and other/i)).toBeInTheDocument();
  });
});
