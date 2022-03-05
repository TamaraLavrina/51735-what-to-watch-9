import { useParams } from 'react-router-dom';
import { PromoCardType } from '../../mocks/mocks';
import Breadcrumbs from '../../components/breadcrumps/breadcrumps';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import NotFound from '../../pages/not-found/not-found';
import ReviewForm from '../../components/review-form/review-form';

type AddReviewProps = {
  catalogFilms: PromoCardType[],
}


function AddReview({catalogFilms}:AddReviewProps):JSX.Element {
  const { id } = useParams<{ id: string }>();
  const film = catalogFilms.find((item) => item.id === Number(id));
  if (!film) {
    return <NotFound />;
  }


  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImg} alt={film.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">

          <Logo />
          <Breadcrumbs currentFilm={film} />
          <UserBlock />

        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.previewImg} alt={film.title} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm />

      </div>
    </section>

  );
}

export default AddReview;
