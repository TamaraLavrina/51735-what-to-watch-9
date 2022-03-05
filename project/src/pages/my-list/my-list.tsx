import {useState} from 'react';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import SmallFilmCard from '../../components/small-film-card/small-film-card';
import UserBlock from '../../components/user-block/user-block';
import { PromoCardType } from '../../mocks/mocks';

type MyListProps = {
  catalogFilms: PromoCardType[],
}


function MyList({catalogFilms}: MyListProps): JSX.Element {
  const [activeFilmId, setActiveFilmId] = useState<number | null>(null);

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
          {catalogFilms.slice(2, 6).map((film) => (
            <SmallFilmCard
              key={film.id}
              film={film}
              isActive={film.id === activeFilmId}
              onCardHover={setActiveFilmId}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
