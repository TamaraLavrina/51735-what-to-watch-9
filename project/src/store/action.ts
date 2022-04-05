import { createAction } from '@reduxjs/toolkit';
import { CardType } from '../types/types';

const changeIsFavoriteStatus = createAction(
  'changeIsFavoriteStatus',
  (value: CardType) => ({
    payload: value,
  }),
);

const redirectToRoute = createAction<string>('redirectToRoute');

export {redirectToRoute,  changeIsFavoriteStatus };
