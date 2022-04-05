import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import Main from '../../pages/main/main';
import Movie from '../../pages/movie/movie';
import LogIn from '../../pages/log-in/log-in';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import AddReview from '../../pages/add-review/add-review';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';


function App(): JSX.Element {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Route}
          element={<Main />}
        />
        <Route
          path={AppRoute.Movie}
          element={<Movie />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Player} element={<Player />} />
        <Route path={AppRoute.Login} element={<LogIn />} />
        <Route path={AppRoute.AddReview} element={<AddReview />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
