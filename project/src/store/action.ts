import { createAction } from '@reduxjs/toolkit';
import { CardType} from '../types/types';
import { AuthorizationStatusName, AppRoute } from '../const/const';

const changeGenre = createAction('changeGenre', (value: string) => ({
  payload: value,
}));

const getListFilms = createAction('getListFilms', (value:CardType[])  => ({
  payload: value,
}));

const getPromoFilm = createAction('getPromoFilm', (value:CardType)  => ({
  payload: value,
}));

const getFavoriteFilms = createAction('getFavoriteFilms', (value: CardType[]) => ({
  payload: value,
}));

const resetFilmsCount = createAction('resetState');
const increaseFilmsCount = createAction('showMoreFilms');
const requireAuthorization = createAction<AuthorizationStatusName>('requireAuthorization');
const redirectToRoute = createAction<AppRoute>('redirectToRoute');


export { changeGenre, getListFilms, resetFilmsCount, increaseFilmsCount, requireAuthorization, getFavoriteFilms, getPromoFilm, redirectToRoute };
