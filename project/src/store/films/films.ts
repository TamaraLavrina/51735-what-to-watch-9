import { createSlice } from '@reduxjs/toolkit';
import {NameSpace} from '../../const/const';
import {filmsType} from '../../types/state';

const initialState: filmsType = {
  currentFilm: null,
  promoFilm: null,
  films: [],
  similarFilms: [],
  favoriteFilms:[],
  isCatalogLoaded: false,
  isPromoLoaded: false,
  isFavoriteLoaded: false,
  isCurrentFilmLoaded: false,
  comments: [],
};

export const films = createSlice({
  name: NameSpace.films,
  initialState,
  reducers: {
    fetchListFilms: (state, action) => {
      state.films = action.payload;
      state.isCatalogLoaded = true;
    },
    fetchPromoFilm: (state, action) => {
      state.promoFilm = action.payload;
      state.isPromoLoaded = true;
    },
    fetchFavoriteFilms: (state, action) => {
      state.favoriteFilms = action.payload;
      state.isFavoriteLoaded = true;
    },
    fetchCurrentFilm: (state, action) => {
      state.currentFilm = action.payload;
      state.isCurrentFilmLoaded = true;
    },
    fetchComments: (state, action) => {
      state.comments = action.payload;
    },
    fetchSimilarFilms: (state, action) => {
      state.similarFilms = action.payload;
    },
    updateFavoriteFilm: (state, action) => {
      const id = (state.films.findIndex((film) => (film.id) === action.payload.id))+1;
      state.films[id] = action.payload;
      if (state.currentFilm && state.currentFilm.id === id) {
        state.currentFilm = action.payload;
      }
      if (state.promoFilm && state.promoFilm.id === id) {
        state.promoFilm = action.payload;
      }
    },
  },
});

export const { fetchListFilms, fetchPromoFilm, fetchFavoriteFilms, fetchCurrentFilm, fetchComments, fetchSimilarFilms, updateFavoriteFilm }  = films.actions;
