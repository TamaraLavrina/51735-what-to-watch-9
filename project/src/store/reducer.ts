import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_ACTIVE_GENRE, FILM_COUNT, AuthorizationStatusName } from '../const/const';
import { CardType, CommentPost, Review, UserLoginDataType } from '../types/types';
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
  fetchSimilarFilms
} from './action';


type initialStateType = {
  activeGenre: string;
  films: CardType[];
  currentFilm:CardType,
  promoFilm: CardType;
  similarFilms: CardType[];
  shownFilmsCount: number;
  authorizationStatus: AuthorizationStatusName;
  favoriteFilms: CardType[];
  isDataLoaded: boolean,
  userComment: CommentPost,
  userLoginData:UserLoginDataType,
  comments: Review[],
};

const initialState: initialStateType = {
  activeGenre: DEFAULT_ACTIVE_GENRE,
  currentFilm: {
    id: 0,
    name: '',
    posterImage: '',
    previewImage: '',
    backgroundImage: '',
    backgroundColor: '',
    videoLink: '',
    previewVideoLink: '',
    description: '',
    rating: 0,
    scoresCount: 0,
    director: '',
    starring: [''],
    runTime: 0,
    genre: '',
    released: 0,
    isFavorite: false,
  },
  promoFilm: {
    id: 0,
    name: '',
    posterImage: '',
    previewImage: '',
    backgroundImage: '',
    backgroundColor: '',
    videoLink: '',
    previewVideoLink: '',
    description: '',
    rating: 0,
    scoresCount: 0,
    director: '',
    starring: [''],
    runTime: 0,
    genre: '',
    released: 0,
    isFavorite: false,
  },
  films: [],
  userComment: {
    id: 0,
    comment: {
      comment: '',
      rating: 0,
    },
  },
  userLoginData: {
    avatarUrl: '',
    email: '',
    id: 0,
    name: '',
    token: '',
  },
  similarFilms: [],
  shownFilmsCount: FILM_COUNT,
  authorizationStatus: AuthorizationStatusName.Unknown,
  favoriteFilms:[],
  isDataLoaded: false,
  comments: [],
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
    })
    .addCase(fetchPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
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
    });
  // .addCase(updateFavoriteList, (state, action) => {
  //   state.favoriteFilms = action.payload;
  // });
});

export { reducer };
