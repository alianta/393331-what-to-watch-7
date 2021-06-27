import dayjs from 'dayjs';
import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  filmId: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.objectOf(dayjs).isRequired,
  ratingScore: PropTypes.number.isRequired,
});
