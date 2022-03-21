import Catalog from '../../components/catalog/catalog';
import FilmCardPromo from '../../components/film-card-promo/film-card-promo';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { CardType } from '../../types/types';

type MainScreenProps = {
  filmPromoCard: CardType;
};

function Main({ filmPromoCard }: MainScreenProps): JSX.Element {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={filmPromoCard.backgroundImg} alt={filmPromoCard.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <FilmCardPromo promofilm={filmPromoCard} />
      </section>

      <div className="page-content">
        <Catalog />

        <Footer />
      </div>
    </>
  );
}

export default Main;
