import { useEffect, useRef } from 'react';
import { CardType } from '../../types/types';


type PlayerProps = {
  isPlaying: boolean;
  film: CardType,
}

function VideoPlayer({isPlaying, film}: PlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.load();
    }
  }, [isPlaying, film.previewImg]);

  return (
    <video
      ref={videoRef}
      src={film.previewVideoLink}
      poster={film.previewImg}
      width="100%"
      height="100%"
      muted
    />
  );
}

export default VideoPlayer;
