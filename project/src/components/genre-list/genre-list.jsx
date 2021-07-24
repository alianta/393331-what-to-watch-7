import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { string } from 'prop-types';

function GenreList(props) {
  const {genreList, currentGenre, onGenreChange, resetShowFilms} = props;
  const onClickHandle = (evt) => {
    if(evt.target.tagName === 'A'){
      resetShowFilms();
      onGenreChange(evt.target.textContent);
    }
  };
  return (
    <ul className="catalog__genres-list" onClick = {onClickHandle}>
      {genreList.map((genre,id) => (
        <li key = {genre} className={(genre === currentGenre)?'catalog__genres-item catalog__genres-item--active':'catalog__genres-item'}>
          <Link to ="/#" className="catalog__genres-link">{genre}</Link>
        </li>
      ))}
    </ul>
  );
}

GenreList.propTypes = {
  currentGenre: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  genreList: PropTypes.arrayOf(string).isRequired,
  resetShowFilms: PropTypes.func.isRequired,
};

export default GenreList;
