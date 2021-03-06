import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import React from 'react';
import filmProp from '../film/filmProp';
dayjs.extend(duration);

function Details(props) {
  const {film} = props;
  const filmTime = dayjs.duration(film.time, 'minutes');

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
          <span className="film-card__details-value">{filmTime.hours()}h {filmTime.minutes()}m</span>
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
}


Details.propTypes = {
  film: filmProp,
};

export default Details;
