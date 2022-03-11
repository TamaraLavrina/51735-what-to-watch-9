import { useParams, Navigate } from 'react-router-dom';
import CardNav from '../../components/card-nav/card-nav';
import FilmButtons from '../../components/film-buttons/film-buttons';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import SmallFilmCard from '../../components/small-film-card/small-film-card';
import { CardType} from '../../mocks/mocks';

type MovieProps = {
  catalogFilms: CardType[],
}

function Movie({catalogFilms}:MovieProps): JSX.Element {
  const { id } = useParams();
  const currentFilm = catalogFilms.find((film) => film.id === Number(id));

  if (!currentFilm) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentFilm.backgroundImg} alt={currentFilm.title}/>
          </div>

          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm.genre}</span>
                <span className="film-card__year">{currentFilm.releaseDate}</span>
              </p>

              <FilmButtons currentFilm={currentFilm} />

            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={currentFilm.poster}alt={currentFilm.title} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <CardNav />

            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            {catalogFilms.slice(2, 6).map((film) => (
              <SmallFilmCard
                key={film.id}
                film={film}
              />
            ))}
          </div>
        </section>

        <Footer />

      </div>
    </>
  );
}

export default Movie;
