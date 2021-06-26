import React from 'react';
import { Link } from 'react-router-dom';
import filmProp from '../film/filmProp';

function Tabs(props) {
  const {film} = props;

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item">
            <Link to="#" className="film-nav__link">Overview</Link>
          </li>
          <li className="film-nav__item film-nav__item--active">
            <Link to="#" className="film-nav__link">Details</Link>
          </li>
          <li className="film-nav__item">
            <Link to="#" className="film-nav__link">Reviews</Link>
          </li>
        </ul>
      </nav>

      <div className="film-card__text film-card__row">
        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Director</strong>
            <span className="film-card__details-value">{film.director}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Starring</strong>
            <span className="film-card__details-value">
              {film.starring.map((value, id) => {
                const keyIndex = film.id + id;
                let coma = '';
                (id !== film.starring.length-1)? coma=', ':coma='';
                return (
                  <React.Fragment key={keyIndex}>{value}{coma}<br/></React.Fragment>
                );
              })}
            </span>
          </p>
        </div>

        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Run Time</strong>
            <span className="film-card__details-value">{film.time}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Genre</strong>
            <span className="film-card__details-value">{film.genre}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Released</strong>
            <span className="film-card__details-value">{film.year}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

Tabs.propTypes = {
  film: filmProp,
};

export default Tabs;
