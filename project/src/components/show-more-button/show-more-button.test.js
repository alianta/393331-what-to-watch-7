import React from 'react';
import {render} from '@testing-library/react';
import ShowMoreButton from './show-more-button';

describe('Component Show more button', () => {
  it('should render Show more button component', () => {
    const {getByText} = render(<ShowMoreButton allFilmLCount='2' showFilmCount='1'/>);
    expect(getByText('Show more')).toBeInTheDocument();
  });
});
