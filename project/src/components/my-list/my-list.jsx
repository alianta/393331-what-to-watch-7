import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import Logo from '../logo/logo';
import FilmList from '../film-list/film-list';
import PropTypes from 'prop-types';
import filmProp from '../film/filmProp';

function MyList(props) {
  const {films} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <Link to="/#" className="user-block__link">Sign out</Link>
          </li>
        </ul>
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


MyList.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
};

export default MyList;
