import React from 'react';
import {render} from '@testing-library/react';
import Details from './details';

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

const filmDataDurationMock = '1h 39m';

describe('Component Film details', () => {
  it('should render film details component', () => {
    const {getByText} = render(<Details film={filmDataMock}/>);

    expect(getByText('Director')).toBeInTheDocument();
    expect(getByText(filmDataMock.director)).toBeInTheDocument();
    expect(getByText('Starring')).toBeInTheDocument();
    filmDataMock.starring.forEach((star) => {
      expect(getByText(star, { exact : false })).toBeInTheDocument();
    });
    expect(getByText('Run Time')).toBeInTheDocument();
    expect(getByText(filmDataDurationMock)).toBeInTheDocument();
    expect(getByText('Genre')).toBeInTheDocument();
    expect(getByText(filmDataMock.genre)).toBeInTheDocument();
    expect(getByText('Released')).toBeInTheDocument();
    expect(getByText(filmDataMock.year)).toBeInTheDocument();
  });
});

