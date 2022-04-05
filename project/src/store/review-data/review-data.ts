import { createSlice } from '@reduxjs/toolkit';
import {NameSpace} from '../../const/const';
import {reviewDataType} from '../../types/state';

const initialState: reviewDataType = {
  isReviewPosted: false,
};

export const reviewData = createSlice({
  name: NameSpace.reviewData,
  initialState,
  reducers: {
    postReview: (state, action) => {
      state.isReviewPosted = action.payload;
    },
  },
});

export const { postReview }  = reviewData.actions;
