import {combineReducers} from 'redux';
import {filmData} from './film-data/film-data';
import {reviewData} from './review-data/review-data';
import {user} from './user/user';
import {server} from './server/server';

export const NameSpace = {
  FILM: 'FILM',
  REVIEW: 'REVIEW',
  USER: 'USER',
  SERVER: 'SERVER',
};

export default combineReducers({
  [NameSpace.FILM]: filmData,
  [NameSpace.REVIEW]: reviewData,
  [NameSpace.USER]: user,
  [NameSpace.SERVER]: server,
});
