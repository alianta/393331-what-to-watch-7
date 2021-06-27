import React from 'react';
import { Link } from 'react-router-dom';
import filmProp from '../film/filmProp';
import PropTypes from 'prop-types';
import reviews from '../../mocks/reviews';
import { TabNames } from '../../const';
import Details from '../details/details';
import Reviews from '../reviews/reviews';
import Overview from '../overview/overview';

function FilmInfoData(film, tabName) {
  const filmReviews = reviews.filter((review)=>review.filmId===film.id);

  switch (tabName) {
    case TabNames.DETAILS:
      return <Details film={film}/>;
    case TabNames.REVIEWS:
      return <Reviews filmReviews={filmReviews}/>;
    default:
      return <Overview film={film}/>;
  }
}

function Tabs(props) {
  const {film, activeTab, changeActiveTab} = props;

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {Object.values(TabNames).map((tabName, id) => {
            const keyIndex = id + tabName;
            return (
              <li key={keyIndex} className={(activeTab===tabName)?'film-nav__item film-nav__item--active':'film-nav__item'} onClick={() => {changeActiveTab(tabName);}}>
                <Link to="#" className="film-nav__link" >{tabName}</Link>
              </li>
            );})}
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
