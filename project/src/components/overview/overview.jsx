import React from 'react';
import filmProp from '../film/filmProp';

function Overview(props) {
  const {film} = props;

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

Overview.propTypes = {
  film: filmProp,
};

export default Overview;
