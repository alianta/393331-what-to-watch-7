import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Logo from './logo';

describe('Component: Logo', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <Logo />
      </Router>,
    );

    expect(getByText('T')).toBeInTheDocument();
    expect(
      screen.getAllByText((_content, el) => el.textContent === 'W'),
    ).toHaveLength(2);
  });
});
