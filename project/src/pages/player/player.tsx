import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import Loader from '../../components/loader/loader';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { fetchCurrentFilmAction } from '../../store/api-actions';
import ErrorLoader from '../../components/loader/error-loader';
dayjs.extend(duration);

const getFormatRemainingTime = (remaining: number): string => {
  const HOUR_IN_MS = 3600;
  const format = remaining >= HOUR_IN_MS ? '-HH:mm:ss' : '-mm:ss';
  return dayjs.duration(remaining, 'seconds').format(format);
};


function Player(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { currentFilm, isCurrentFilmLoaded } = useAppSelector(({ FILMS }) => FILMS);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(true);
  const [currentTimeVideo, setCurrentTimeVideo] = useState<number>(0);

  useEffect(() => {
    dispatch(fetchCurrentFilmAction(Number(id)));
  }, [id, dispatch]);

  useEffect(() => {
    if (isActive) {
      if (videoRef.current) {
        videoRef.current.play();
      }
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [isActive]);

  if (!currentFilm || !isCurrentFilmLoaded) {
    return <Loader />;
  }

  if (currentFilm === null) {
    return <ErrorLoader />;
  }

  const handleTimeUpdate = () => {
    if (videoRef && videoRef.current) {
      const percent = Math.round(videoRef.current?.currentTime*100 / videoRef?.current.duration);
      setCurrentTimeVideo(Math.round(videoRef?.current.duration - videoRef.current?.currentTime));
      if (progressRef.current) {
        progressRef.current.style.left = `${percent}%`;
      }
    }
  };

  const handlePlayFilm = () => {
    setIsActive(!isActive);
  };

  const handleFullScreen = () => {
    videoRef.current?.requestFullscreen();
  };

  return (
    <div className="player">
      <video
        ref={videoRef}
        src={currentFilm.videoLink}
        className="player__video"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => {videoRef.current?.play();}}
        onEnded={() => {videoRef.current?.pause();}}
      >
      </video>
      <button
        type="button"
        className="player__exit"
        onClick={() => {
          videoRef.current?.pause();
          window.history.back();
        }}
      >
        Exit
      </button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              max="100"

            >
            </progress>
            <div
              className="player__toggler"
              ref={progressRef}
            >
              Toggler
            </div>
          </div>
          <div className="player__time-value">
            {getFormatRemainingTime(currentTimeVideo)}
          </div>
        </div>
        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={handlePlayFilm}
          >
            <svg viewBox="0 0 19 19" width="19" height="19">
              {isActive ? (
                <use xlinkHref="#pause"></use>
              ) : (
                <use xlinkHref="#play-s"></use>
              )}
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{currentFilm.name}</div>
          <button
            type="button"
            className="player__full-screen"
            onClick={handleFullScreen}
          >
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

export default Player;
