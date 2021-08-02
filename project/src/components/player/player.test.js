import React from 'react';
import {render, screen} from '@testing-library/react';
import Player from './player';
import {createMemoryHistory} from 'history';
import {Router, Switch, Route} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

let history = null;
let store = null;

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

describe('Component: Player', () => {
  beforeAll(() => {
    window.HTMLMediaElement.prototype.play = () => {};
    history = createMemoryHistory();
    history.push(`/player/${filmDataMock.id}`, filmDataMock);
    const createFakeStore = configureStore({});
    store = createFakeStore({
      SERVER: {
        isServerError: false,
      },
    });
  });

  it('should render correctly', () => {
    const {getByText} = render(
      <Provider store={store}>
        <Router history={history}>
          <Player location={history.location}/>
        </Router>
      </Provider>
      ,
    );

    expect(getByText(filmDataMock.title)).toBeInTheDocument();
    expect(getByText('Exit')).toBeInTheDocument();
  });

  it('should switch player to full mode', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Player location={history.location}/>
        </Router>
      </Provider>,
    );

    userEvent.click(document.querySelector('.player__full-screen'));
    expect(Document.fullscreenElement).not.toBe(null);
  });

  it('should redirect to main screen on exit button click', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <h1>This is main page</h1>
            </Route>
            <Route>
              <Player location={history.location}/>
            </Route>
          </Switch>
        </Router>
      </Provider>,
    );

    expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();
    userEvent.click(document.querySelector('.player__exit'));
    expect(screen.queryByText(/This is main page/i)).toBeInTheDocument();
  });
});
