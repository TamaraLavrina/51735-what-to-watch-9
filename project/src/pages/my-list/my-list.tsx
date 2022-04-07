import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import SmallFilmCard from '../../components/small-film-card/small-film-card';
import UserBlock from '../../components/user-block/user-block';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import {  fetchFavoriteFilmsAction } from '../../store/api-actions';
import Loader from '../../components/loader/loader';

function MyList(): JSX.Element {
  const {favoriteFilms, isFavoriteLoaded} = useAppSelector(({FILMS}) => FILMS);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteFilmsAction());
  },[dispatch]);

  if (!isFavoriteLoaded) {
    return <Loader />;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {favoriteFilms.map((film) => (
            <SmallFilmCard
              key={film.id}
              film={film}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
