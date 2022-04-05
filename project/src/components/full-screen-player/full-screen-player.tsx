// import { useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
// import { useNavigate } from 'react-router-dom';
import { CardType } from '../../types/types';
dayjs.extend(duration);

type FullScreenPlayerProps = {
  currentFilm: CardType;
};

function FullScreenPlayer({ currentFilm }: FullScreenPlayerProps): JSX.Element {
  // const { posterImage, videoLink, name } = currentFilm;

  return (
    <div className="player">

    </div>
  );
}

export default FullScreenPlayer;
