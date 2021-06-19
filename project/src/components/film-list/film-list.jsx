import React from 'react';
import FilmCard from '../film-card/film-card';
import PropTypes from 'prop-types';
import filmProp from '../film/filmProp';

function FilmList(props) {
  const {films} = props;
  return (
    <div className="catalog__films-list">
      {films.map((film) => (<FilmCard key={film.id} filmId={film.id} filmName={film.title} previewImage={film.poster}/>))}
    </div>
  );
}

FilmList.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
};

export default FilmList;
