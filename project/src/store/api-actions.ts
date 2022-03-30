import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../store';
import { store } from '../store';
import {
  getListFilms,
  requireAuthorization,
  getPromoFilm,
  redirectToRoute
} from './action';
import { saveToken, dropToken } from '../services/token';
import {
  APIRoute,
  AuthorizationStatusName,
  AppRoute
} from '../const/const';
import { CardType } from '../types/types';
import { AuthData, UserData } from '../types/types';
import errorHandle from '../services/error-handle';

const fetchFilmsAction = createAsyncThunk('data/fetchFilms', async () => {
  try {
    const { data } = await api.get<CardType[]>(APIRoute.Films);
    store.dispatch(getListFilms(data));
  } catch (error) {
    errorHandle(error);
  }
});

const checkAuthAction = createAsyncThunk('user/checkAuth', async () => {
  try {
    await api.get(APIRoute.Login);
    store.dispatch(requireAuthorization(AuthorizationStatusName.Auth));
  } catch (error) {
    errorHandle(error);
    store.dispatch(requireAuthorization(AuthorizationStatusName.NoAuth));
  }
});

const loginAction = createAsyncThunk(
  'user/login',
  async ({ login: email, password }: AuthData) => {
    try {
      const {
        data: { token },
      } = await api.post<UserData>(APIRoute.Login, { email, password });
      saveToken(token);
      // console.log(token);
      store.dispatch(requireAuthorization(AuthorizationStatusName.Auth));
      store.dispatch(redirectToRoute(AppRoute.MyList));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatusName.NoAuth));
    }
  },
);

const logoutAction = createAsyncThunk('user/logout', async () => {
  try {
    await api.delete(APIRoute.Logout);
    dropToken();
    store.dispatch(requireAuthorization(AuthorizationStatusName.NoAuth));
  } catch (error) {
    errorHandle(error);
  }
});

const fetchFavoriteFilms = createAsyncThunk('data/fetchFilms', async () => {
  const { data } = await api.get<CardType[]>(APIRoute.Favorite);
  store.dispatch(getListFilms(data));
});

const fetchPromoFilm = createAsyncThunk('data/fetchPromoFilm', async () => {
  const { data } = await api.get<CardType>(APIRoute.Promo);
  store.dispatch(getPromoFilm(data));
});

export {
  fetchFavoriteFilms,
  logoutAction,
  fetchFilmsAction,
  loginAction,
  checkAuthAction,
  fetchPromoFilm
};
