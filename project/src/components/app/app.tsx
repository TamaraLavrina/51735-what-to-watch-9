import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import Main from '../../pages/main';
import Movie from '../../pages/movie';
import LogIn from '../../pages/log-in';
import MyList from '../../pages/my-list';
import Player from '../../pages/player';
import AddReview from '../../pages/add-review';
import { PromoCardType } from '../../mocks/mocks';
import PrivateRoute from '../private-route/private-route';
import NotFound from '../../pages/not-found';

type AppProps = {
  PromoCard: PromoCardType,
  CatalogFilms: PromoCardType[],
};

function App({ PromoCard, CatalogFilms }: AppProps):JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Route} element={<Main filmPromoCard = {PromoCard} catalogFilms={CatalogFilms}/>}/>
        <Route path={AppRoute.Movie} element={<Movie catalogFilms={CatalogFilms}/>}/>
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <MyList catalogFilms={CatalogFilms} />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Player} element={<Player />} />
        <Route path={AppRoute.Login} element={<LogIn />} />
        <Route path={AppRoute.AddReview} element={<AddReview catalogFilms={CatalogFilms}/>} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
