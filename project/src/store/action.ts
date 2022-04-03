import { createAction } from '@reduxjs/toolkit';
import { CardType, Review } from '../types/types';
import { AuthorizationStatusName, AppRoute } from '../const/const';

const changeGenre = createAction(
  'changeGenre',
  (value: string) => ({
    payload: value,
  }),
);

const fetchListFilms = createAction(
  'fetchListFilms',
  (value: CardType[]) => ({
    payload: value,
  }),
);

const fetchPromoFilm = createAction(
  'fetchPromoFilm',
  (value: CardType) => ({
    payload: value,
  }),
);

const fetchFavoriteFilms = createAction(
  'fetchFavoriteFilms',
  (value: CardType[]) => ({
    payload: value,
  }),
);

const fetchComments = createAction(
  'fetchCurrentFilmComments',
  (value: Review[]) => ({
    payload: value,
  }),
);

const fetchCurrentFilm = createAction(
  'fetchCurrentFilm',
  (value: CardType) => ({
    payload: value,
  }),
);

const fetchSimilarFilms = createAction(
  'fetchSimilarFilms',
  (value: CardType[]) => ({
    payload: value,
  }),
);

const resetFilmsCount = createAction('resetState');
const increaseFilmsCount = createAction('showMoreFilms');
const requireAuthorization = createAction<AuthorizationStatusName>(
  'requireAuthorization',
);
const redirectToRoute = createAction<AppRoute>('redirectToRoute');
const changeIsFavoriteStatus = createAction(
  'changeIsFavoriteStatus',
  (value: CardType) => ({
    payload: value,
  }),
);

export {
  changeGenre,
  fetchListFilms,
  resetFilmsCount,
  increaseFilmsCount,
  requireAuthorization,
  fetchFavoriteFilms,
  fetchPromoFilm,
  redirectToRoute,
  fetchCurrentFilm,
  fetchComments,
  fetchSimilarFilms,
  changeIsFavoriteStatus
};
