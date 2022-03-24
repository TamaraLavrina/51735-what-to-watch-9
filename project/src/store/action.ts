import {createAction} from '@reduxjs/toolkit';

const changeGenre = createAction('changeGenre', (value: string) => ({
  payload: value,
}));

const getListFilms = createAction('getListFilms');
const resetFilmsCount = createAction('resetState');
const increaseFilmsCount = createAction('showMoreFilms');

export { changeGenre, getListFilms,  resetFilmsCount, increaseFilmsCount};
