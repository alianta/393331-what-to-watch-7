import React from 'react';
import { Link } from 'react-router-dom';
import filmProp from '../film/filmProp';
import PropTypes from 'prop-types';

const TabNames ={
  OVERVIEW: 'Overview',
  DETAILS: 'Details',
  REVIEWS: 'Reviews',
};

function FilmInfoData(film, tabName) {
  switch (tabName) {
    case TabNames.DETAILS:
      return (
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
      );
    case TabNames.REVIEWS:
      return 'REVIEWS';
    default:
      return (
        <React.Fragment>
          <div className="film-rating">
            <div className="film-rating__score">{film.ratingScore}</div>
            <p className="film-rating__meta">
              <span className="film-rating__level">{film.ratingDescription}</span>
              <span className="film-rating__count">{film.ratingCount} ratings</span>
            </p>
          </div>

          <div className="film-card__text">
            <p>{film.description}</p>
            <p className="film-card__director"><strong>Director: {film.director}</strong></p>
            <p className="film-card__starring">
              <strong>Starring: {film.starring.map((value, id) => {
                const keyIndex = film.id + id;
                let coma = '';
                (id !== film.starring.length-1)? coma=', ':coma='';
                return (
                  <React.Fragment key={keyIndex}>{value}{coma}</React.Fragment>
                );
              })} and other
              </strong>
            </p>
          </div>
        </React.Fragment>
      );
  }
}

function Tabs(props) {
  const {film, activeTab, changeActiveTab} = props;

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={(activeTab===TabNames.OVERVIEW)?'film-nav__item film-nav__item--active':'film-nav__item'} onClick={() => {changeActiveTab(TabNames.OVERVIEW);}}>
            <Link to="#" className="film-nav__link" >Overview</Link>
          </li>
          <li className={(activeTab===TabNames.DETAILS)?'film-nav__item film-nav__item--active':'film-nav__item'} onClick={() => {changeActiveTab(TabNames.DETAILS);}}>
            <Link to="#" className="film-nav__link">Details</Link>
          </li>
          <li className={(activeTab===TabNames.REVIEWS)?'film-nav__item film-nav__item--active':'film-nav__item'} onClick={() => {changeActiveTab(TabNames.REVIEWS);}}>
            <Link to="#" className="film-nav__link">Reviews</Link>
          </li>
        </ul>
      </nav>
      {FilmInfoData(film, activeTab)}

    </div>
  );
}

Tabs.propTypes = {
  film: filmProp,
  activeTab: PropTypes.string.isRequired,
  changeActiveTab: PropTypes.func.isRequired,
};

export default Tabs;
