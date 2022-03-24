import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, getListFilms, resetFilmsCount, increaseFilmsCount } from './action';
import { films } from '../mocks/mocks';
import { DEFAULT_ACTIVE_GENRE, FILM_COUNT } from '../const/const';

const initialState = {
  activeGenre: DEFAULT_ACTIVE_GENRE,
  films: films,
  shownFilmsCount: FILM_COUNT,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = action.payload;
      state.shownFilmsCount = FILM_COUNT;
      state.films = films;
    })
    .addCase(getListFilms, (state) => {
      state.activeGenre = DEFAULT_ACTIVE_GENRE;
      state.films = films;
      state.shownFilmsCount = FILM_COUNT;
    })
    .addCase(resetFilmsCount, (state) => {
      state.activeGenre = DEFAULT_ACTIVE_GENRE;
      state.shownFilmsCount = FILM_COUNT;
    })
    .addCase(increaseFilmsCount, (state) => {
      state.shownFilmsCount = state.shownFilmsCount + FILM_COUNT;
    });
});

export { reducer };
