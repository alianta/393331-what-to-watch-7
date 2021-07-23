import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
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
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browserHistory';

function App(props) {
  const {films, isDataLoaded, isFilmOfDayLoaded, authorizationStatus} = props;

  if (isCheckedAuth(authorizationStatus)||!isDataLoaded ||!isFilmOfDayLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage/>
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MY_LIST}
          render={() => <MyList films={films}/>}
        >
        </PrivateRoute>
        <Route path={AppRoute.FILM} exact component={Film} />
        <PrivateRoute
          exact
          path={AppRoute.REVIEW}
          render={(componentProps) => <AddReview {...componentProps}/>}
        />
        <Route path={AppRoute.PLAYER} exact component={Player} />
        <Route path={AppRoute.NOT_FOUND} exact component={NotFoundScreen}/>
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
  isFilmOfDayLoaded: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({USER, FILM}) => ({
  authorizationStatus: USER.authorizationStatus,
  isDataLoaded: FILM.isDataLoaded,
  isFilmOfDayLoaded: FILM.isFilmOfDayLoaded,
  films: FILM.films,
});

export {App};
export default connect(mapStateToProps, null)(App);
