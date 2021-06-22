import React from 'react';
import { Link } from 'react-router-dom';
import filmProp from '../film/filmProp';
import { generatePath } from 'react-router';
import PropTypes from 'prop-types';

function FilmCard(props) {
  const {film, onMouseEnter} = props;

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={onMouseEnter}>
      <div className="small-film-card__image">
        <img src={film.poster} alt={film.title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={generatePath('/film/:id/', {id: film.id})}>{film.title}</Link>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  film: filmProp,
  onMouseEnter: PropTypes.func.isRequired,
};

export default FilmCard;
