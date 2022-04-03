import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatusName } from '../../const/const';
import Main from '../../pages/main/main';
import Movie from '../../pages/movie/movie';
import LogIn from '../../pages/log-in/log-in';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import AddReview from '../../pages/add-review/add-review';
import NotFound from '../../pages/not-found/not-found';
import Loader from '../loader/loader';
import PrivateRoute from '../private-route/private-route';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';


const isCheckedAuth = (authorizationStatus: AuthorizationStatusName): boolean =>
  authorizationStatus === AuthorizationStatusName.Unknown;

function App(): JSX.Element {
  const catalogFilms = useAppSelector((state) => state.films);
  const PromoCard = useAppSelector((state) => state.promoFilm);
  const { authorizationStatus, isDataLoaded } = useAppSelector(
    (state) => state,
  );


  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return <Loader />;
  }


  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Route}
          element={<Main filmPromoCard={PromoCard} />}
        />
        <Route
          path={AppRoute.Movie}
          element={<Movie />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Player} element={<Player />} />
        <Route path={AppRoute.Login} element={<LogIn />} />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview catalogFilms={catalogFilms} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
