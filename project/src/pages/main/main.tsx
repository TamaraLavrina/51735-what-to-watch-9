import {Navigate } from 'react-router-dom';
import Catalog from '../../components/catalog/catalog';
import FilmCardPromo from '../../components/film-card-promo/film-card-promo';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { AppRoute } from '../../const/const';
import {  CardType } from '../../types/types';


type MainScreenProps = {
  filmPromoCard: CardType;
};

function Main({ filmPromoCard }: MainScreenProps): JSX.Element {
  if (!filmPromoCard) {
    <Navigate to={AppRoute.NotFound} />;
  } return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={filmPromoCard.backgroundImage} alt={filmPromoCard.name} />
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
