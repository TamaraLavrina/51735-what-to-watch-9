import { createSlice } from '@reduxjs/toolkit';
import {NameSpace} from '../../const/const';
import {contentDataType} from '../../types/state';

const initialState: contentDataType = {
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

export const content = createSlice({
  name: NameSpace.content,
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
  },
});

export const { fetchListFilms, fetchPromoFilm, fetchFavoriteFilms, fetchCurrentFilm, fetchComments, fetchSimilarFilms }  = content.actions;
