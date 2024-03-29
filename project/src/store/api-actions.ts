import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../store';
import { store } from '../store';
import { redirectToRoute } from './action';
import {
  fetchListFilms,
  fetchCurrentFilm,
  fetchFavoriteFilms,
  fetchPromoFilm,
  fetchComments,
  fetchSimilarFilms,
  updateFavoriteFilm
} from './films/films';
import { requireAuthorization } from '../store/user/user';
import { postReview } from './reviews/reviews';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AuthorizationStatusName, AppRoute } from '../const/const';
import {
  CardType,
  ReviewType,
  AuthData,
  UserData,
  isFavoriteStatus,
  CommentPost
} from '../types/types';

import errorHandle from '../services/error-handle';
import { saveAvatarUrl } from '../services/avatarUrl';

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
        data: { token, avatarUrl },
      } = await api.post<UserData>(APIRoute.Login, { email, password });
      saveToken(token);
      saveAvatarUrl(avatarUrl);
      store.dispatch(requireAuthorization(AuthorizationStatusName.Auth));
      store.dispatch(redirectToRoute(AppRoute.Route));
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

const fetchFavoriteFilmsAction = createAsyncThunk(
  'data/fetchFilms',
  async () => {
    try {
      const { data } = await api.get<CardType[]>(APIRoute.Favorite);
      store.dispatch(fetchFavoriteFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

const fetchPromoFilmAction = createAsyncThunk(
  'data/fetchPromoFilm',
  async () => {
    try {
      const { data } = await api.get<CardType>(APIRoute.Promo);
      store.dispatch(fetchPromoFilm(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

const fetchCurrentFilmAction = createAsyncThunk(
  'data/fetchCurrentFilm',
  async (id: number) => {
    try {
      const { data } = await api.get<CardType>(`${APIRoute.Films}/${id}`);
      store.dispatch(fetchCurrentFilm(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

const fetchCommentsAction = createAsyncThunk(
  'data/fetchComments',
  async (id: number) => {
    try {
      const { data } = await api.get<ReviewType[]>(
        `${APIRoute.Comments}/${id}`,
      );
      store.dispatch(fetchComments(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

const fetchSimilarFilmsAction = createAsyncThunk(
  'data/fetchSimilarFilmsAction',
  async (id: number) => {
    try {
      const { data } = await api.get<CardType[]>(
        `${APIRoute.Films}/${id}/similar`,
      );
      store.dispatch(fetchSimilarFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

const changeIsFavoriteStatusAction = createAsyncThunk(
  'changeIsFavoriteStatusAction',
  async ({ filmId, status }: isFavoriteStatus) => {
    try {
      const { data } =  await api.post<isFavoriteStatus>(`/favorite/${filmId}/${status}`);
      store.dispatch(updateFavoriteFilm(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

const postNewComment = createAsyncThunk(
  'postNewComment',
  async ({ filmId, comment }: CommentPost) => {
    try {
      await api.post<CommentPost>(`comments/${filmId}`, comment);
      store.dispatch(fetchCurrentFilmAction(filmId));
      store.dispatch(postReview(true));
      store.dispatch(redirectToRoute(`/films/${filmId}`));
    } catch (error) {
      errorHandle(error);
      store.dispatch(postReview(false));
    }
  },
);

export {
  fetchFavoriteFilmsAction,
  logoutAction,
  fetchFilmsAction,
  loginAction,
  checkAuthAction,
  fetchCurrentFilmAction,
  fetchPromoFilmAction,
  fetchCommentsAction,
  fetchSimilarFilmsAction,
  changeIsFavoriteStatusAction,
  postNewComment
};
