import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, AuthorizationStatusName, DEFAULT_ACTIVE_GENRE, FILM_COUNT} from '../../const/const';
import {userType} from '../../types/state';

const initialState: userType = {
  authorizationStatus: AuthorizationStatusName.Unknown,
  activeGenre: DEFAULT_ACTIVE_GENRE,
  shownFilmsCount: FILM_COUNT,
};

export const user = createSlice({
  name: NameSpace.user,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    changeGenre: (state, action) => {
      state.activeGenre = action.payload;
      state.shownFilmsCount = FILM_COUNT;
    },
    resetFilmsCount: (state) => {
      state.activeGenre = DEFAULT_ACTIVE_GENRE;
      state.shownFilmsCount = FILM_COUNT;
    },
    increaseFilmsCount: (state) => {
      state.shownFilmsCount = state.shownFilmsCount + FILM_COUNT;
    },
  },
});

export const { requireAuthorization, changeGenre, resetFilmsCount, increaseFilmsCount }  = user.actions;

