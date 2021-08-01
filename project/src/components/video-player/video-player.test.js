import React from 'react';
import {render} from '@testing-library/react';
import VideoPlayer from './video-player';

describe('Component: VideoPlayer', () => {
  beforeAll(() => {
    window.HTMLMediaElement.prototype.play = () => {};
  });

  it('should render correctly', () => {
    const mockPath = 'mock-path';
    const {container} = render(
      <VideoPlayer
        videoFile={mockPath}
        poster=''
      />,
    );

    const videoElement = container.querySelector('video');
    expect(videoElement).toBeInTheDocument();
    expect(container.querySelector('video')).toBeInTheDocument();
    expect(videoElement.getAttribute('src')).toEqual(mockPath);
    expect(videoElement).toHaveClass('player__video');
  });
});
