import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Catalog from '../../components/catalog/catalog';
import FilmCardPromo from '../../components/film-card-promo/film-card-promo';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import ErrorLoader from '../../components/loader/error-loader';
import Loader from '../../components/loader/loader';
import { fetchPromoFilmAction, fetchFilmsAction } from '../../store/api-actions';
import { resetFilmsCount } from '../../store/user/user';
import { isCheckedAuth } from '../../services/utils';
import { getAuthorizationStatus } from '../../store/user/selectors';
import { getFilms, getIsCatalogLoaded, getIsPromoLoaded, getPromoFilm } from '../../store/films/selectors';

function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPromoFilmAction());
    dispatch(fetchFilmsAction());
  }, [dispatch]);

  useEffect(() => () => {
    dispatch(resetFilmsCount());
  }, [dispatch],
  );

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const promoFilm = useAppSelector(getPromoFilm);
  const isCatalogLoaded = useAppSelector(getIsCatalogLoaded);
  const isPromoLoaded = useAppSelector(getIsPromoLoaded);
  const films = useAppSelector(getFilms);

  if (
    !isCatalogLoaded ||
    !isPromoLoaded ||
    isCheckedAuth(authorizationStatus) ||
    !isCatalogLoaded
  ) {
    return <Loader />;
  }

  if (!promoFilm || !films) {
    return <ErrorLoader />;
  }

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <FilmCardPromo promoFilm={promoFilm} />
      </section>

      <div className="page-content">
        <Catalog />

        <Footer />
      </div>
    </>
  );
}

export default Main;
