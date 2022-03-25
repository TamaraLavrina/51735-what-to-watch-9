import { createAction } from '@reduxjs/toolkit';
import { CardType } from '../types/types';
import {AuthorizationStatus} from '../const/const';

const changeGenre = createAction('changeGenre', (value: string) => ({
  payload: value,
}));

const getListFilms = createAction('getListFilms', (value:CardType[])  => ({
  payload: value,
}));

const resetFilmsCount = createAction('resetState');
const increaseFilmsCount = createAction('showMoreFilms');
const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

export { changeGenre, getListFilms, resetFilmsCount, increaseFilmsCount, requireAuthorization };
