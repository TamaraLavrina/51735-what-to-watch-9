import CardNav from '../components/card-nav/card-nav';
import FilmButtons from '../components/film-buttons/film-buttons';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import SmallFilmCard from '../components/small-film-card/small-film-card';
import { PromoCardType} from '../mocks/mocks';

type MovieProps = {
  movie:   PromoCardType,
  catalogFilms: PromoCardType[],
}

function Movie({movie, catalogFilms}:MovieProps): JSX.Element {
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={movie.backgroundImg} alt={movie.title}/>
          </div>

          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{movie.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{movie.genre}</span>
                <span className="film-card__year">{movie.releaseDate}</span>
              </p>

              <FilmButtons />

            </div>
          </div>

        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={movie.poster}alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <CardNav />

              <div className="film-rating">
                <div className="film-rating__score">8,9</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">240 ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes).
                  Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.
                </p>

                <p>Gustave prides himself on providing first-class service to the hotel&apos;s guests,
                  including satisfying the sexual needs of the many elderly women who stay there.
                  When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself
                   the recipient of a priceless painting and the chief suspect in her murder.
                </p>

                <p className="film-card__director"><strong>Director: {movie.director}</strong></p>

                <p className="film-card__starring"><strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other</strong></p>
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