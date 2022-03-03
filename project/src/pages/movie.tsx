import { useParams } from 'react-router-dom';
// import {MouseEvent} from 'react';
import {useState} from 'react';
import CardNav from '../components/card-nav/card-nav';
import FilmButtons from '../components/film-buttons/film-buttons';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import SmallFilmCard from '../components/small-film-card/small-film-card';
import { PromoCardType} from '../mocks/mocks';
import NotFound from '../pages/not-found';

type MovieProps = {
  catalogFilms: PromoCardType[],
}

function Movie({catalogFilms}:MovieProps): JSX.Element {
  const params = useParams();
  const currentFilm = catalogFilms.find((film) => film.id === Number(params.id));
  const [activeFilmId, setActiveFilmId] = useState<number | null>(null);

  if (!currentFilm) {
    return <NotFound />;
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

              <div className="film-rating">

                <div className="film-rating__score">{currentFilm.rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">{currentFilm.scores} ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{currentFilm.description}</p>

                <p className="film-card__director"><strong>Director: {currentFilm.director}</strong></p>

                <p className="film-card__starring"><strong>Starring: {currentFilm.starring}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {catalogFilms.slice(2,6).map((film) => (
              <SmallFilmCard
                key={film.id}
                film={film}
                isActive={film.id === activeFilmId}
                onHover={setActiveFilmId}

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
