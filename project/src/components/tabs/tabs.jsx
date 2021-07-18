import React from 'react';
import { Link } from 'react-router-dom';
import filmProp from '../film/filmProp';
import PropTypes from 'prop-types';
import { TabNames } from '../../const';
import Details from '../details/details';
import Reviews from '../reviews/reviews';
import Overview from '../overview/overview';
import reviewProp from '../review/reviewProp';

function FilmInfoData(film, tabName, reviews) {
  switch (tabName) {
    case TabNames.DETAILS:
      return <Details film={film}/>;
    case TabNames.REVIEWS:
      return <Reviews filmReviews={reviews}/>;
    default:
      return <Overview film={film}/>;
  }
}

function Tabs(props) {
  const {film, activeTab, changeActiveTab, filmReviews} = props;

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
      {FilmInfoData(film, activeTab, filmReviews)}

    </div>
  );
}

Tabs.propTypes = {
  film: filmProp,
  activeTab: PropTypes.string.isRequired,
  changeActiveTab: PropTypes.func.isRequired,
  filmReviews: PropTypes.arrayOf(reviewProp).isRequired,
};

export default Tabs;
