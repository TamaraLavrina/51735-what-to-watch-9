import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../store';
import { store } from '../store';
import {
  fetchListFilms,
  requireAuthorization,
  fetchPromoFilm,
  redirectToRoute,
  fetchComments,
  fetchCurrentFilm,
  fetchSimilarFilms
} from './action';
import { saveToken, dropToken } from '../services/token';
import {
  APIRoute,
  AuthorizationStatusName,
  AppRoute
} from '../const/const';
import { CardType, Review } from '../types/types';
import { AuthData, UserData } from '../types/types';
import errorHandle from '../services/error-handle';

const fetchFilmsAction = createAsyncThunk('data/fetchFilms', async () => {
  try {
    const { data } = await api.get<CardType[]>(APIRoute.Films);
    store.dispatch(fetchListFilms(data));
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

const fetchFavoriteFilmsAction = createAsyncThunk('data/fetchFilms', async () => {
  try {
    const { data } = await api.get<CardType[]>(APIRoute.Favorite);
    store.dispatch(fetchListFilms(data));
  }catch (error) {
    errorHandle(error);
  }
});

const fetchPromoFilmAction = createAsyncThunk('data/fetchPromoFilm', async () => {
  try{
    const { data } = await api.get<CardType>(APIRoute.Promo);
    store.dispatch(fetchPromoFilm(data));
  }catch (error) {
    errorHandle(error);
  }
});

const fetchCurrentFilmAction = createAsyncThunk('data/fetchCurrentFilm', async (id: number) => {
  try{
    const { data } = await api.get<CardType>(`${APIRoute.Films}/${id}`);
    store.dispatch(fetchCurrentFilm(data));
  }catch (error) {
    errorHandle(error);
  }
});

const fetchCommentsAction = createAsyncThunk(
  'data/fetchComments', async (id: number) => {
    try{
      const { data } = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
      store.dispatch(fetchComments(data));
    }catch (error) {
      errorHandle(error);
    }
  });

const fetchSimilarFilmsAction = createAsyncThunk(
  'data/fetchSimilarFilmsAction', async (id: number) => {
    try{
      const { data } = await api.get<CardType[]>(`${APIRoute.Films}/${id}/similar`);
      store.dispatch(fetchSimilarFilms(data));
    }catch (error) {
      errorHandle(error);
    }
  });


export {
  fetchFavoriteFilmsAction,
  logoutAction,
  fetchFilmsAction,
  loginAction,
  checkAuthAction,
  fetchCurrentFilmAction,
  fetchPromoFilmAction,
  fetchCommentsAction,
  fetchSimilarFilmsAction
};
