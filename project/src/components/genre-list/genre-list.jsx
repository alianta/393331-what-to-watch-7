import React from 'react';
import { Link } from 'react-router-dom';
import { getGenreList } from '../../utils';
import FilmList from '../film-list/film-list';
import PropTypes from 'prop-types';
import filmProp from '../film/filmProp';
import { DEFAULT_GENRE } from '../../const';

function GenreList(props) {
  const {films} = props;
  const genreList = getGenreList(films);
  const activeGenre=DEFAULT_GENRE;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul className="catalog__genres-list">
        {genreList.map((genre,id) => (
          <li key = {genre} className={(genre===activeGenre)?'catalog__genres-item catalog__genres-item--active':'catalog__genres-item'}>
            <Link to="/#" className="catalog__genres-link">{genre}</Link>
          </li>
        ))}
      </ul>
      <FilmList films={films}></FilmList>
      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}


GenreList.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
};

export default GenreList;
