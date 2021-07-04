import React from 'react';
import { Link } from 'react-router-dom';
import FilmList from '../film-list/film-list';
import PropTypes, { string } from 'prop-types';
import filmProp from '../film/filmProp';

function GenreList(props) {
  const {films, genreList, currentGenre, onGenreChange} = props;
  const onClickHandle=(evt)=>{
    if(evt.target.tagName==='A'){
      onGenreChange(evt.target.textContent);
    }
  };
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul className="catalog__genres-list" onClick={onClickHandle}>
        {genreList.map((genre,id) => (
          <li key = {genre} className={(genre===currentGenre)?'catalog__genres-item catalog__genres-item--active':'catalog__genres-item'}>
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
  currentGenre: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  genreList: PropTypes.arrayOf(string).isRequired,
};

export default GenreList;
