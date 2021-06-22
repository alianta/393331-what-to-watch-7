import dayjs from 'dayjs';

const RANDOM_MIN_DAY = 0;
const RANDOM_MAX_DAY = 10;

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};
const generateDate = () => {
  const randomDate = getRandomInteger(RANDOM_MIN_DAY, RANDOM_MAX_DAY);
  return dayjs().subtract(randomDate, 'day').toDate();
};

const reviews = [
  {
    id: 1,
    filmId: 1,
    text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
    author: 'Kate Muir',
    date: generateDate(),
    ratingScore: 8.9,
  },
  {
    id: 2,
    filmId: 1,
    text: 'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking',
    author: 'Matthew Lickona',
    date: generateDate(),
    ratingScore: 7.2,
  },
  {
    id: 3,
    filmId: 1,
    text: 'Anderson\'s films are too precious for some, but for those of us willing to lose ourselves in them, they\'re a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.',
    author: 'Bill Goodykoontz',
    date: generateDate(),
    ratingScore: 8.0,
  },
  {
    id: 4,
    filmId: 1,
    text: 'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.',
    author: 'Paula Fleri-Soler',
    date: generateDate(),
    ratingScore: 7.6,
  },
  {
    id: 5,
    filmId: 1,
    text: 'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.',
    author: 'Paula Fleri-Soler',
    date: generateDate(),
    ratingScore: 7.0,
  },
  {
    id: 6,
    filmId: 1,
    text: 'I didn\'t find it amusing, and while I can appreciate the creativity, it\'s an hour and 40 minutes I wish I could take back.',
    author: 'Amanda Greever',
    date: generateDate(),
    ratingScore: 8.0,
  },
  {
    id: 7,
    filmId: 2,
    text: 'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking',
    author: 'Matthew Lickona',
    date: generateDate(),
    ratingScore: 7.2,
  },
  {
    id: 8,
    filmId: 2,
    text: 'Anderson\'s films are too precious for some, but for those of us willing to lose ourselves in them, they\'re a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.',
    author: 'Bill Goodykoontz',
    date: generateDate(),
    ratingScore: 8.0,
  },
  {
    id: 9,
    filmId: 3,
    text: 'Anderson\'s films are too precious for some, but for those of us willing to lose ourselves in them, they\'re a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.',
    author: 'Bill Goodykoontz',
    date: generateDate(),
    ratingScore: 8.0,
  },
  {
    id: 10,
    filmId: 4,
    text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
    author: 'Kate Muir',
    date: generateDate(),
    ratingScore: 8.9,
  },
  {
    id: 11,
    filmId: 4,
    text: 'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking',
    author: 'Matthew Lickona',
    date: generateDate(),
    ratingScore: 7.2,
  },
  {
    id: 12,
    filmId: 4,
    text: 'Anderson\'s films are too precious for some, but for those of us willing to lose ourselves in them, they\'re a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.',
    author: 'Bill Goodykoontz',
    date: generateDate(),
    ratingScore: 8.0,
  },
];

export default reviews;
