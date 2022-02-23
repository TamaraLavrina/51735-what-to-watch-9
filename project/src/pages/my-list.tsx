import Footer from '../components/footer/footer';

import Logo from '../components/logo/logo';
import SmallFilmCard from '../components/small-film-card/small-film-card';
import UserBlock from '../components/user-block/user-block';
import { filmsList } from '../mocks/mocks';

function MyList(): JSX.Element {
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
          {filmsList.slice(1,10).map((item) => (
            <SmallFilmCard key={item.filmTitle} filmTitle={item.filmTitle} filmImage={item.filmImage} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
