import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  bigImage: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  previewVideo: PropTypes.string.isRequired,
  ratingScore: PropTypes.number.isRequired,
  ratingCount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string).isRequired,
  time: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isFilmOfDay: PropTypes.bool.isRequired,
});
