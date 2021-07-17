import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import PropTypes from 'prop-types';
import AddReviewForm from '../add-review-form/add-review-form';
import { generatePath } from 'react-router';
import UserBlock from '../user-block/user-block';
import {connect} from 'react-redux';
import filmProp from '../film/filmProp';

function AddReview (props) {
  const filmId = parseInt(props.match.params.id,10);
  const {filmData} = props;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={filmData.bigImage} alt={filmData.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={generatePath('/film/:id/', {id: filmId})} className="breadcrumbs__link">{filmData.title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to="/#" className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <UserBlock/>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={filmData.poster} alt={''.concat(filmData.title, 'poster')} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm film={filmData} onReview={()=>{}}></AddReviewForm>
      </div>
    </section>
  );
}

AddReview.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
  filmData: filmProp,
};

const mapStateToProps = (state) => ({
  filmData: state.currentFilm,
});

export {AddReview};
export default connect(mapStateToProps, null)(AddReview);
