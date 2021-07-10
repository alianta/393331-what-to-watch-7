import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainPage from '../main-page/main-page';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PropTypes from 'prop-types';
import filmProp from '../film/filmProp';
import LoadingScreen from '../loading-screen/loading-screen';
import {connect} from 'react-redux';
import {isCheckedAuth} from '../../utils';

function App(props) {
  const {films, isDataLoaded, authorizationStatus} = props;

  if (isCheckedAuth(authorizationStatus)||!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage/>
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.MY_LIST}>
          <MyList films={films}/>
        </Route>
        <Route path={AppRoute.FILM} exact component={Film} />
        <Route path={AppRoute.REVIEW} exact component={AddReview}/>
        <Route path={AppRoute.PLAYER} exact component={Player} />
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,
  films: state.films,
});

export {App};
export default connect(mapStateToProps, null)(App);
