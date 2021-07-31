import React from 'react';
import {render} from '@testing-library/react';
import Reviews from './reviews';

const reviewsMock = [{
  id: 1,
  userId: 4,
  text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed movies in years.',
  author: 'Kate Muir',
  date: '2019-07-08T14:13:56.569Z',
  ratingScore: 8.9,
}];

describe('Conponent Review', () => {
  it('should render Review compotent', () => {
    const {getByText} = render(<Reviews filmReviews={reviewsMock}/>);

    expect(getByText(reviewsMock[0].text)).toBeInTheDocument();
    expect(getByText(reviewsMock[0].author)).toBeInTheDocument();
    expect(getByText('July 08, 2019')).toBeInTheDocument();
    expect(getByText(reviewsMock[0].ratingScore)).toBeInTheDocument();
  });
});
