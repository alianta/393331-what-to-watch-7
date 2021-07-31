import React from 'react';
import {render} from '@testing-library/react';
import Tabs from './tabs';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { TabNames } from '../../const';

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
const filmReviewsMock = {
  id: 1,
  userId: 4,
  text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed movies in years.',
  author: 'Kate Muir',
  date: '2019-05-08T14:13:56.569Z',
  ratingScore: 8.9,
};
const activeTab = 'Details';

describe('Conponent Tabs', () => {
  it('should render Tabs component', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <Tabs
          film={filmDataMock}
          activeTab={activeTab}
          filmReviews = {[filmReviewsMock]}
          changeActiveTab = {()=>{}}
        />
      </Router>);

    let tab='';
    for (tab in TabNames) {
      expect(getByText(TabNames[tab])).toBeInTheDocument();
    }

  });
});

