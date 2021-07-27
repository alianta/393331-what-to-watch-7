import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import filmProp from '../film/filmProp';
import {useHistory} from 'react-router-dom';
import {formatVideoTime} from '../../utils';
import VideoLoadingSpinner from '../video-loading-spinner/video-loading-spinner';
import {VIDEO_CAN_START_PLAYING_STATE} from '../../const';

function Player (props) {
  const filmData = props.location.state;
  const history = useHistory();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoLoading , setIsVideoLoading ] = useState(true);
  const [currentPlaingTime, setCurrentPlaingTime] = useState(0);
  const videoRef = useRef();

  useEffect(() => {
    isPlaying ? videoRef.current.play() : videoRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    videoRef.current.onloadeddata = () => {
      if(videoRef.current.readyState >= VIDEO_CAN_START_PLAYING_STATE) {
        setIsVideoLoading(false);
      }
    };
  });

  const onFullScreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const videoTimeUpdate = (evt) => {
    setCurrentPlaingTime(evt.target.currentTime);

    if(evt.target.currentTime >= filmData.time) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };
  return (
    <div className="player">
      <video
        src={filmData.video}
        ref={videoRef}
        className="player__video"
        poster={filmData.bigImage}
        onTimeUpdate={videoTimeUpdate}
      >
      </video>
      <button type="button" className="player__exit" onClick={history.goBack}>Exit</button>
      {isVideoLoading?<VideoLoadingSpinner/>:''}
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={currentPlaingTime*100/(filmData.time*60)} max='100'></progress>
            <div className="player__toggler" style={{left: (currentPlaingTime*100/(filmData.time*60)).toString().concat('%')}}>Toggler</div>
          </div>
          <div className="player__time-value">- {formatVideoTime(filmData.time*60-currentPlaingTime)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying?
              <React.Fragment>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </React.Fragment>:
              <React.Fragment>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </React.Fragment>}
          </button>
          <div className="player__name">{filmData.title}</div>

          <button type="button" className="player__full-screen" onClick={onFullScreen}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

Player.propTypes = {
  location: PropTypes.shape({
    state: filmProp,
  }),
};

export default Player;
