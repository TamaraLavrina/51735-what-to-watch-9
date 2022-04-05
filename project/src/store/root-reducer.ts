import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const/const';
import {content} from './content/content';
import { reviewData } from './review-data/review-data';
import {user} from './user/user';

export const rootReducer = combineReducers({
  [NameSpace.content]: content.reducer,
  [NameSpace.reviewData]: reviewData.reducer,
  [NameSpace.user]: user.reducer,
});
