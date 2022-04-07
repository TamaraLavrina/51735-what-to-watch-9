import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import MovieNavTabs from '../../components/movie-nav-tabs/movie-nav-tabs';
import FilmButtons from '../../components/film-buttons/film-buttons';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import SmallFilmCard from '../../components/small-film-card/small-film-card';
import ErrorLoader from '../../components/loader/error-loader';
import Loader from '../../components/loader/loader';
import { fetchCurrentFilmAction, fetchSimilarFilmsAction, fetchCommentsAction } from '../../store/api-actions';


function Movie(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const {currentFilm, similarFilms, comments, isCurrentFilmLoaded } = useAppSelector(({FILMS}) => FILMS);
  const similarFetchedFilms = similarFilms;
  const similarShownFilms = similarFetchedFilms.slice(0, 4);

  const reviews = comments;

  useEffect(() => {
    dispatch(fetchCurrentFilmAction(Number(id)));
    dispatch(fetchSimilarFilmsAction(Number(id)));
    dispatch(fetchCommentsAction(Number(id)));
  },[id, dispatch]);

  if (!isCurrentFilmLoaded) {
    return <Loader />;
  }

  if (currentFilm === null){
    return <ErrorLoader />;
  }

  return (
    <>
      <section className="film-card film-card--full" style={{backgroundColor: currentFilm.backgroundColor}}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentFilm.backgroundImage} alt={currentFilm.name} />
          </div>

          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm.genre}</span>
                <span className="film-card__year">
                  {currentFilm.released}
                </span>
              </p>

              <FilmButtons currentFilm={currentFilm} />
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={currentFilm.posterImage}
                alt={currentFilm.name}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <MovieNavTabs movie={currentFilm} reviews={reviews} />
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        {similarFilms.length > 0 && (
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <div className="catalog__films-list">
              {similarShownFilms.map((film) => (
                <SmallFilmCard key={film.id} film={film} />
              ))}
            </div>
          </section>)}
        <Footer />
      </div>
    </>
  );
}

export default Movie;
