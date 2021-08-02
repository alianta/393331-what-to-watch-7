import React, {useEffect} from 'react';
import Footer from '../footer/footer';
import Logo from '../logo/logo';
import FilmList from '../film-list/film-list';
import {useSelector, useDispatch} from 'react-redux';
import {getFavoriteFilms} from '../../store/user/selectors';
import {fetchFavoriteFilms} from '../../store/api-actions';
import UserBlock from '../user-block/user-block';
import Error from '../error/error';
import {getServerErrorStatus} from '../../store/server/selectors';

function MyList() {
  const films = useSelector(getFavoriteFilms);
  const isServerError = useSelector(getServerErrorStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFavoriteFilms());
  }, []);

  return (
    <div className="user-page">
      {isServerError?<Error />:''}
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmList films={films}></FilmList>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
