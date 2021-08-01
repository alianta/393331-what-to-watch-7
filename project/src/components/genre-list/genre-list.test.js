import React from 'react';
import {render} from '@testing-library/react';
import GenreList from './genre-list';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const genreListMock = ['All genres', 'Drama', 'Comedy', 'Fantasy', 'Horror'];
const currentGenreMock = 'Comedy';

describe('Component Genre list', () => {
  it('should render Genre list component', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <GenreList
          genreList={genreListMock}
          currentGenre={currentGenreMock}
        />
      </Router>);

    genreListMock.forEach((genre) => {
      expect(getByText(genre)).toBeInTheDocument();
    });
  });
});

