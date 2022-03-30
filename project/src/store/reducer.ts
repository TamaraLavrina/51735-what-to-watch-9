import { createReducer } from '@reduxjs/toolkit';
import { PromoBudapest } from '../mocks/mocks';
import {
  changeGenre,
  getListFilms,
  resetFilmsCount,
  increaseFilmsCount,
  requireAuthorization,
  getFavoriteFilms,
  getPromoFilm
} from './action';

import {
  DEFAULT_ACTIVE_GENRE,
  FILM_COUNT,
  AuthorizationStatusName
} from '../const/const';
import { CardType } from '../types/types';


type initialStateType = {
  activeGenre: string;
  films: CardType[];
  promoFilm: CardType;
  shownFilmsCount: number;
  authorizationStatus: AuthorizationStatusName;
  favoriteFilms: CardType[];
  isDataLoaded: boolean,
};

const initialState: initialStateType = {
  activeGenre: DEFAULT_ACTIVE_GENRE,
  promoFilm: PromoBudapest,
  films: [],
  shownFilmsCount: FILM_COUNT,
  authorizationStatus: AuthorizationStatusName.Unknown,
  favoriteFilms:[],
  isDataLoaded: false,
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
      state.isDataLoaded = true;
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
      // console.log(state.authorizationStatus);
    })
    .addCase(getPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(getFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload;
    });
});

export { reducer };
