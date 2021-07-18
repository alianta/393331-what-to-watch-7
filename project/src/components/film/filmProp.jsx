import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number,
  poster: PropTypes.string,
  bigImage: PropTypes.string,
  video: PropTypes.string,
  previewVideo: PropTypes.string,
  ratingScore: PropTypes.number,
  ratingCount: PropTypes.number,
  description: PropTypes.string,
  director: PropTypes.string,
  starring: PropTypes.arrayOf(PropTypes.string),
  time: PropTypes.number,
  isFavorite: PropTypes.bool,
});
