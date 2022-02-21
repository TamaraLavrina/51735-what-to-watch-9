import Main from '../../pages/main';
import { PromoCardType } from '../../mocks/mocks';

type AppProps = {
  PromoCard: PromoCardType,
};

function App({ PromoCard }: AppProps) {
  return (
    <Main filmPromoCard = {PromoCard}/>
  );
}

export default App;
