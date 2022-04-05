import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_ACTIVE_GENRE, FILM_COUNT, AuthorizationStatusName } from '../const/const';
import { CardType,  Review } from '../types/types';
import {
  changeGenre,
  fetchListFilms,
  resetFilmsCount,
  increaseFilmsCount,
  requireAuthorization,
  fetchFavoriteFilms,
  fetchPromoFilm,
  fetchCurrentFilm,
  fetchComments,
  fetchSimilarFilms,
  postReview
} from './action';


type initialStateType = {
  activeGenre: string;
  films: CardType[];
  currentFilm:CardType | null,
  promoFilm: CardType | null;
  similarFilms: CardType[];
  shownFilmsCount: number;
  authorizationStatus: AuthorizationStatusName;
  favoriteFilms: CardType[];
  isPromoLoaded: boolean,
  isCatalogLoaded: boolean,
  comments: Review[],
  isReviewPosted: boolean,
};

const initialState: initialStateType = {
  activeGenre: DEFAULT_ACTIVE_GENRE,
  currentFilm: null,
  promoFilm: null,
  films: [],
  similarFilms: [],
  shownFilmsCount: FILM_COUNT,
  authorizationStatus: AuthorizationStatusName.Unknown,
  favoriteFilms:[],
  isCatalogLoaded: false,
  isPromoLoaded: false,
  comments: [],
  isReviewPosted: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = action.payload;
      state.shownFilmsCount = FILM_COUNT;
    })
    .addCase(fetchListFilms, (state, action) => {
      state.activeGenre = DEFAULT_ACTIVE_GENRE;
      state.films = action.payload;
      state.shownFilmsCount = FILM_COUNT;
      state.isCatalogLoaded = true;
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
    })
    .addCase(fetchPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
      state.isPromoLoaded = true;
    })
    .addCase(fetchFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload;
    })
    .addCase(fetchCurrentFilm, (state, action) => {
      state.currentFilm = action.payload;
    })
    .addCase(fetchComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(fetchSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(postReview, (state, action) => {
      state.isReviewPosted = action.payload;
    });
});

export { reducer };
