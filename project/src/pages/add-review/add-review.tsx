import { useParams, Navigate } from 'react-router-dom';
import { CardType } from '../../types/types';
import Breadcrumbs from '../../components/breadcrumps/breadcrumps';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import ReviewForm from '../../components/review-form/review-form';

type AddReviewProps = {
  catalogFilms: CardType[],
}


function AddReview({catalogFilms}:AddReviewProps):JSX.Element {
  const { id } = useParams<{ id: string }>();
  const film = catalogFilms.find((item) => item.id === Number(id));
  if (!film) {
    return <Navigate to="/" />;
  }


  return (
    <section className="film-card film-card--full" style={{backgroundColor: film.backgroundColor}}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">

          <Logo />
          <Breadcrumbs currentFilm={film} />
          <UserBlock />

        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.previewImage} alt={film.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm film={film}/>

      </div>
    </section>

  );
}

export default AddReview;
