import React from 'react';
import {render} from '@testing-library/react';
import LoadingScreen from './loading-screen';

describe('Component: loading-screen', () => {
  it('should render correctly', () => {
    const {getByText} = render(<LoadingScreen />);
    const loadingScreenElement = getByText('Loading ...');
    expect(loadingScreenElement).toBeInTheDocument();
  });
});
