import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';

function App(props) {
  const {filmName, filmGenre, filmYear} = props;
  return <MainPage filmName={filmName} filmGenre={filmGenre} filmYear={filmYear}/>;
}

App.propTypes = {
  filmName: PropTypes.string.isRequired,
  filmGenre: PropTypes.string.isRequired,
  filmYear: PropTypes.string.isRequired,
};

export default App;
