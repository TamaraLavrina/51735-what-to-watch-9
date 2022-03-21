import {createAction} from '@reduxjs/toolkit';

const changeGenre = createAction('changeGenre', (value: string) => ({
  payload: value,
}));

const getListFilms = createAction('getListFilms');
const resetState = createAction('resetState');
const showMoreFilms = createAction('showMoreFilms');

export { changeGenre, getListFilms,  resetState, showMoreFilms};
