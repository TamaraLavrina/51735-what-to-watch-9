import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import Loader from '../../components/loader/loader';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { fetchCurrentFilmAction } from '../../store/api-actions';
import ErrorLoader from '../../components/loader/error-loader';
dayjs.extend(duration);

function Player(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { currentFilm, isCurrentFilmLoaded } = useAppSelector(({ CONTENT }) => CONTENT);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isActive, setIsActive] = useState(true);
  const [currentTimeVideo, setCurrentTimeVideo] = useState<number>(0);
  const progressBar: { left: string } = { left: `${currentTimeVideo}%` };

  useEffect(() => {
    dispatch(fetchCurrentFilmAction(Number(id)));
  }, [id, dispatch]);

  if (!currentFilm || !isCurrentFilmLoaded) {
    return <Loader />;
  }

  if (currentFilm === null) {
    return <ErrorLoader />;
  }

  const videoLink = currentFilm.videoLink;
  const handleOnTimeUpdate = () => {
    if (videoRef && videoRef.current) {
      setCurrentTimeVideo((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  const filmDuration = dayjs.duration(
    (currentFilm.runTime - currentTimeVideo),
    'seconds',
  );

  const formatedFilmDuration =
    filmDuration.asHours() >= 1
      ? filmDuration.format('-HH:mm:ss')
      : filmDuration.format('-mm:ss');

  const handleVideoProgress = (evt: React.FormEvent<HTMLProgressElement>) => {
    if (videoRef && videoRef.current) {
      const target = evt.target as HTMLProgressElement;
      const togleValue = Number(target.value);
      videoRef.current.currentTime =
            (videoRef.current.duration / 100) * togleValue;
      setCurrentTimeVideo(togleValue);
    }
  };

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
        src={videoLink}
        className="player__video"
        onTimeUpdate={handleOnTimeUpdate}
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
              onChange={(evt) => handleVideoProgress(evt)}
              value={currentTimeVideo}
              max="100"
            >
            </progress>
            <div
              className="player__toggler"
              style={progressBar}
            >
              Toggler
            </div>
          </div>
          <div className="player__time-value">
            {formatedFilmDuration}
          </div>
        </div>
        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={() => {
              handlePlayFilm();
            }}
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
            onClick={() => {
              handleFullScreen();
            }}
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
