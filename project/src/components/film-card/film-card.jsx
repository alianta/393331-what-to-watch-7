import React, {useState} from 'react';
import { Link, useHistory, generatePath } from 'react-router-dom';
import filmProp from '../film/filmProp';
import VideoPlayer from '../video-player/video-player';

function FilmCard(props) {
  const {film} = props;
  const [isPlaying, setIsPlaying] = useState(false);
  const history = useHistory();

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => setIsPlaying(true)}
      onMouseLeave={() => setIsPlaying(false)}
      onClick={() => history.push(generatePath('/film/:id/', {id: film.id}))}
    >
      <div className="small-film-card__image">
        {!isPlaying ? <img src={film.previewImage} alt={film.title} width="280" height="175" /> : <VideoPlayer poster={film.previewImage} videoFile={film.previewVideo} />}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={generatePath('/film/:id/', {id: film.id})}>{film.title}</Link>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  film: filmProp,
};

export default FilmCard;
