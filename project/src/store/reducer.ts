import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, getListFilms, resetState, showMoreFilms } from './action';
import { films } from '../mocks/mocks';
import { DEFAULT_ACTIVE_GENRE, FILM_COUNT } from '../const/const';

const initialState = {
  activeGenre: DEFAULT_ACTIVE_GENRE,
  films: films,
  quantityFilms: FILM_COUNT,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = action.payload;
      state.quantityFilms = FILM_COUNT;
      state.films = films;
    })
    .addCase(getListFilms, (state) => {
      state.activeGenre = DEFAULT_ACTIVE_GENRE;
      state.films = films;
      state.quantityFilms = FILM_COUNT;
    })
    .addCase(resetState, (state) => {
      state.activeGenre = DEFAULT_ACTIVE_GENRE;
      state.quantityFilms = FILM_COUNT;
    })
    .addCase(showMoreFilms, (state) => {
      state.quantityFilms = state.quantityFilms + FILM_COUNT;
    });
});

export { reducer };
