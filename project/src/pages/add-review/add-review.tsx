import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import Breadcrumbs from '../../components/breadcrumps/breadcrumps';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import ReviewForm from '../../components/review-form/review-form';
import ErrorLoader from '../../components/loader/error-loader';
import { fetchCurrentFilmAction } from '../../store/api-actions';


function AddReview():JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const {currentFilm} = useAppSelector(({CONTENT}) => CONTENT);

  useEffect(() => {
    dispatch(fetchCurrentFilmAction(Number(id)));
  },[id, dispatch]);


  if (!currentFilm) {
    return <ErrorLoader />;
  }

  return (
    <section className="film-card film-card--full" style={{backgroundColor: currentFilm.backgroundColor}}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={currentFilm.backgroundImage} alt={currentFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">

          <Logo />
          <Breadcrumbs currentFilm={currentFilm} />
          <UserBlock />

        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={currentFilm.previewImage} alt={currentFilm.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm />

      </div>
    </section>

  );
}

export default AddReview;
