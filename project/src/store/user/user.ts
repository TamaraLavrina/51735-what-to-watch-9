import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, AuthorizationStatusName, DEFAULT_ACTIVE_GENRE, FILM_COUNT} from '../../const/const';
import {userType} from '../../types/state';

const initialState: userType = {
  authorizationStatus: AuthorizationStatusName.Unknown,
  activeGenre: DEFAULT_ACTIVE_GENRE,
  shownFilmsCount: FILM_COUNT,
  userAvatar: '',
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
    setUserAvatar: (state, action) => {
      state.userAvatar = action.payload;
    },
  },
});

export const { requireAuthorization, changeGenre, resetFilmsCount, increaseFilmsCount, setUserAvatar }  = user.actions;

