import { createReducer } from '@reduxjs/toolkit';
import {
  changeGenre,
  getListFilms,
  resetFilmsCount,
  increaseFilmsCount,
  requireAuthorization
} from './action';

import {
  DEFAULT_ACTIVE_GENRE,
  FILM_COUNT,
  AuthorizationStatus
} from '../const/const';
import { CardType } from '../types/types';
import { films } from '../mocks/mocks';

type initialStateType = {
  activeGenre: string;
  films: CardType[];
  shownFilmsCount: number;
  authorizationStatus: AuthorizationStatus;
};

const initialState: initialStateType = {
  activeGenre: DEFAULT_ACTIVE_GENRE,
  films:films,
  // films: [],
  shownFilmsCount: FILM_COUNT,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = action.payload;
      state.shownFilmsCount = FILM_COUNT;
    })
    .addCase(getListFilms, (state, action) => {
      state.activeGenre = DEFAULT_ACTIVE_GENRE;
      state.films = action.payload;
      state.shownFilmsCount = FILM_COUNT;
    })
    .addCase(resetFilmsCount, (state) => {
      state.activeGenre = DEFAULT_ACTIVE_GENRE;
      state.shownFilmsCount = FILM_COUNT;
    })
    .addCase(increaseFilmsCount, (state) => {
      state.shownFilmsCount = state.shownFilmsCount + FILM_COUNT;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
