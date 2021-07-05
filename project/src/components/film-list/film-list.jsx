import React, {useState} from 'react';
import FilmCard from '../film-card/film-card';
import PropTypes from 'prop-types';
import filmProp from '../film/filmProp';

function FilmList(props) {
  const {films} = props;
  const [activeFilmCard, setActiveFilmCard] = useState(0);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard key = {film.id}
          activeFilmCard = {activeFilmCard}
          film = {film}
          onMouseEnter = {(target) => {
            setActiveFilmCard(film.id);}}
        />
      ))}
    </div>
  );
}

FilmList.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
};

export default FilmList;
