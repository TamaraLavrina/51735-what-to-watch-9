import Catalog from '../components/catalog/catalog';
import FilmCardPromo from '../components/film-card-promo/film-card-promo';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import { PromoCardType } from '../mocks/mocks';

type MainScreenProps = {
  filmPromoCard: PromoCardType,
  catalogFilms: PromoCardType[],
};

function Main({filmPromoCard, catalogFilms}: MainScreenProps): JSX.Element {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={filmPromoCard.backgroundImg} alt={filmPromoCard.title} />
        </div>
        <h1 className="visually-hidden">WTW</h1>

        <Header />
        <FilmCardPromo Promofilm = {filmPromoCard}/>

      </section>

      <div className="page-content">

        <Catalog filmsList = {catalogFilms}/>
        <Footer />

      </div>
    </>
  );
}

export default Main;
