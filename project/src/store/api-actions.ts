import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../store';
import {store} from '../store';
import {getListFilms } from './action';
// import {saveToken, dropToken} from '../services/token';
import {APIRoute /*AuthorizationStatus*/} from '../const/const';
import { CardType } from '../types/types';
// import {AuthData, UserData} from '../types/types';

export const fetchFilmsAction = createAsyncThunk(
  'data/fetchFilms',
  async () => {
    const {data} = await api.get<CardType[]>(APIRoute.Films);
    store.dispatch(getListFilms(data));
  },
);
