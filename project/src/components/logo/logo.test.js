import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router, Switch, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Logo from './logo';
import userEvent from '@testing-library/user-event';

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

  it('should redirect to main screen on logo click', () => {
    const history = createMemoryHistory();
    history.push('/logo');

    render(
      <Router history={history}>
        <Switch>
          <Route path="/" exact>
            <h1>This is main page</h1>
          </Route>
          <Route>
            <Logo path="/logo"/>
          </Route>
        </Switch>
      </Router>,
    );

    expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();
    userEvent.click(document.querySelector('.logo__link'));
    expect(screen.queryByText(/This is main page/i)).toBeInTheDocument();
  });
});
