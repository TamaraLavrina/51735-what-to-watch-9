import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const/const';
import {films} from './films/films';
import { reviewData } from './reviews/reviews';
import {user} from './user/user';

export const rootReducer = combineReducers({
  [NameSpace.films]: films.reducer,
  [NameSpace.reviews]: reviewData.reducer,
  [NameSpace.user]: user.reducer,
});
