import { useEffect, useRef } from 'react';
import { PromoCardType } from  '../../mocks/mocks';


type PlayerProps = {
  isPlaying: boolean;
  film: PromoCardType,
}

function VideoPlayer({isPlaying, film}: PlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    videoRef.current.load();
  }, [isPlaying, film.previewImg]);

  return (
    <video
      ref = {videoRef}
      src = {film.previewVideoLink}
      poster = {film.previewImg}
      width = "100%"
      height = "100%"
      muted
    />
  );
}

export default VideoPlayer;
