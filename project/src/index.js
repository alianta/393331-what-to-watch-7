import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import {ActionCreator} from './store/action';
import {AuthorizationStatus} from './const';
import {checkAuth, fetchFlms, fetchPromoFilm} from './store/api-actions';

const api = createAPI(
  () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

store.dispatch(checkAuth());
store.dispatch(fetchFlms());
store.dispatch(fetchPromoFilm());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'));
