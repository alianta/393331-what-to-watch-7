import React from 'react';
import { Link } from 'react-router-dom';
import filmProp from '../film/filmProp';

function FilmCard(props) {
  window.scrollTo(0, 0);
  const {film} = props;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={film.poster} alt={film.title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={''.concat('/film/',film.id)}>{film.title}</Link>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  film: filmProp,
};

export default FilmCard;
