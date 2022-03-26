import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatusName } from '../../const/const';
import Main from '../../pages/main/main';
import Movie from '../../pages/movie/movie';
import LogIn from '../../pages/log-in/log-in';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import AddReview from '../../pages/add-review/add-review';
import NotFound from '../../pages/not-found/not-found';
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';


const isCheckedAuth = (authorizationStatus: AuthorizationStatusName): boolean =>
  authorizationStatus === AuthorizationStatusName.Unknown;

function App(): JSX.Element {
  const catalogFilms = useAppSelector((state) => state.films);
  const { authorizationStatus, isDataLoaded } = useAppSelector(
    (state) => state,
  );

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return <LoadingScreen />;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Route}
          element={<Main filmPromoCard={catalogFilms[0]} />}
        />
        <Route
          path={AppRoute.Movie}
          element={<Movie catalogFilms={catalogFilms} />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <MyList catalogFilms={catalogFilms} />
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
    </BrowserRouter>
  );
}

export default App;
