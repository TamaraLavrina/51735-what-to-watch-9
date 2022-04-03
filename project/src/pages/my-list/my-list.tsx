import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import SmallFilmCard from '../../components/small-film-card/small-film-card';
import UserBlock from '../../components/user-block/user-block';
import { store } from '../../store';
import { useEffect } from 'react';
import { useAppSelector } from '../../hooks';
import {  fetchFavoriteFilmsAction } from '../../store/api-actions';


function MyList(): JSX.Element {
  useEffect(() => {
    store.dispatch(fetchFavoriteFilmsAction());
  },[]);

  const favoriteFilms = useAppSelector((state) => state.favoriteFilms);

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
