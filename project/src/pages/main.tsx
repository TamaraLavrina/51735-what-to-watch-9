import Catalog from '../components/catalog/catalog';
import FilmCardPromo from '../components/film-card-promo/film-card-promo';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import { PromoCardType } from '../mocks/mocks';

type MainScreenProps = {
  filmPromoCard: PromoCardType,
};

function Main({filmPromoCard}: MainScreenProps): JSX.Element {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>
        <h1 className="visually-hidden">WTW</h1>

        <Header />
        <FilmCardPromo Promofilm = {filmPromoCard}/>

      </section>

      <div className="page-content">

        <Catalog />
        <Footer />

      </div>
    </>
  );
}

export default Main;
