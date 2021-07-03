import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import films from './mocks/films';
import reviews from './mocks/reviews';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App films={films} reviews={reviews}/>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'));
