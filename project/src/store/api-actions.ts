import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../store';
import { store } from '../store';
import { getListFilms, requireAuthorization, setError } from './action';
import { saveToken, dropToken } from '../services/token';
import {
  APIRoute,
  AuthorizationStatusName,
  TIMEOUT_SHOW_ERROR
} from '../const/const';
import { CardType } from '../types/types';
import { AuthData, UserData } from '../types/types';
import errorHandle from '../services/error-handle';

const clearErrorAction = createAsyncThunk('data/clearError', () => {
  setTimeout(() => store.dispatch(setError('')), TIMEOUT_SHOW_ERROR);
});

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
      store.dispatch(requireAuthorization(AuthorizationStatusName.Auth));
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

export {
  fetchFavoriteFilms,
  logoutAction,
  fetchFilmsAction,
  loginAction,
  checkAuthAction,
  clearErrorAction
};
