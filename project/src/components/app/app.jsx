import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainPage from '../main-page/main-page';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import LoadingScreen from '../loading-screen/loading-screen';
import {useSelector} from 'react-redux';
import {isCheckedAuth} from '../../utils';
import PrivateRoute from '../private-route/private-route';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {getLoadedDataStatus, getFilmOfDayLoadedStatus} from '../../store/film-data/selectors';

function App() {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isDataLoaded = useSelector(getLoadedDataStatus);
  const isFilmOfDayLoaded = useSelector(getFilmOfDayLoadedStatus);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded || !isFilmOfDayLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
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
        render={() => <MyList />}
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
  );
}

export default App;
