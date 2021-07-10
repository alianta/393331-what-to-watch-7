import {getRatingDescription} from '../utils';

export const adaptFilmToClient = (film) => ({
  id: film.id,
  title: film.name,
  genre: film.genre,
  year: film.released,
  poster: film.poster_image,
  bigImage: film.background_image,
  previewImage: film.preview_image,
  video: film.video_link,
  previewVideo: film.preview_video_link,
  ratingScore: film.rating,
  ratingDescription: getRatingDescription(film.rating),
  ratingCount: film.scores_count,
  description: film.description,
  director: film.director,
  starring: film.starring,
  time: film.run_time,
  isFavorite: film.is_favorite,
});
