import {reviewData} from './review-data';
import {ActionType} from '../action';
import {AuthorizationStatus} from '../../const';

const currentFilmCommentsServerMock = [{
  id: 1,
  user: {
    id: 4,
    name: 'Kate Muir',
  },
  rating: 8.9,
  comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed movies in years.',
  date: '2019-05-08T14:13:56.569Z',
}];


const currentFilmCommentsMock = [{
  id: 1,
  userId: 4,
  text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed movies in years.',
  author: 'Kate Muir',
  date: '2019-05-08T14:13:56.569Z',
  ratingScore: 8.9,
}];

describe('Reducer: review-data', () => {
  it('should update currentFilmComments by load film comments', () => {
    const state = {authorizationStatus: AuthorizationStatus.AUTH, currentFilmComments: []};
    const loadCurrentFilmCommentsAction = {
      type: ActionType.LOAD_FILM_COMMENTS,
      payload: currentFilmCommentsServerMock,
    };

    expect(reviewData(state, loadCurrentFilmCommentsAction))
      .toEqual({
        currentFilmComments: currentFilmCommentsMock,
        authorizationStatus: AuthorizationStatus.AUTH,
        isCurrentFilmCommentsLoaded: true,
      });
  });
});
