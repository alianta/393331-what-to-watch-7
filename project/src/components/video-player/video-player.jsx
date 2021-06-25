import React , {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

function VideoPlayer (props) {
  const {videoFile, poster} = props;
  const videoRef = useRef();

  useEffect(() => {setTimeout(() => {videoRef.current.play();},1000);});

  return (
    <video src={videoFile} ref={videoRef} className="player__video" poster={poster} muted></video>
  );
}

VideoPlayer.propTypes = {
  videoFile: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default VideoPlayer;
