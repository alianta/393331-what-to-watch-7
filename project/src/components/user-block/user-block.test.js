import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../const';
import UserBlock from './user-block';

let history = null;
let store = null;
let fakeApp = null;


describe('Conponent UserBlock', () => {

  it('should render UserBlock compotent for Authorize user', () => {
    history = createMemoryHistory();
    const createFakeStore = configureStore({});
    store = createFakeStore({
      FILM: {},
      REVIEW: {},
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        authorizationInfo: {
          id: 1,
          email: 'Oliver.conner@gmail.com',
          name: 'Oliver.conner',
          avatarUrl: 'img/1.png',
          token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=;',
        },
      },
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <UserBlock />
        </Router>
      </Provider>
    );
    render(fakeApp);

    expect(screen.getByText('Sign out')).toBeInTheDocument();
  });

  it('should render UserBlock compotent for Unauthorize user', () => {
    history = createMemoryHistory();
    const createFakeStore = configureStore({});
    store = createFakeStore({
      FILM: {},
      REVIEW: {},
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authorizationInfo: {},
      },
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <UserBlock />
        </Router>
      </Provider>
    );
    render(fakeApp);

    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });
});
