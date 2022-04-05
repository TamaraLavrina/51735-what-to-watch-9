import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import Loader from '../../components/loader/loader';
// import FullScreenPlayer from '../../components/full-screen-player/full-screen-player';
// import ErrorLoader from '../../components/loader/error-loader';
import { fetchCurrentFilmAction } from '../../store/api-actions';


function Player(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const {currentFilm} = useAppSelector(({CONTENT}) => CONTENT);

  useEffect(() => {
    dispatch(fetchCurrentFilmAction(Number(id)));
  },[id, dispatch]);


  if (!currentFilm) {
    return <Loader />;
  }

  return (
    <div className="player">
      {/* <FullScreenPlayer currentFilm={currentFilm} /> */}
    </div>);
}

export default Player;
