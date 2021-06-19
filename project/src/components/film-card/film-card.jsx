import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function FilmCard(props) {
  const {filmName, previewImage} = props;
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={previewImage} alt={filmName} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to="film-page.html">{filmName}</Link>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  filmName: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
};

export default FilmCard;
