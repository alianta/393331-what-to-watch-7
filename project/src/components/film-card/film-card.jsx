import React from 'react';
import { Link } from 'react-router-dom';

function FilmCard() {

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to="film-page.html">Macbeth</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
