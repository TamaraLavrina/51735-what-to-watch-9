import { store } from '../store/index';
import { AuthorizationStatusName } from '../const/const';
import { CardType, ReviewType } from './types';

export type userType = {
  authorizationStatus: AuthorizationStatusName;
  activeGenre: string;
  shownFilmsCount: number;
};

export type contentDataType = {
  films: CardType[];
  currentFilm:CardType | null,
  promoFilm: CardType | null;
  similarFilms: CardType[];
  favoriteFilms: CardType[];
  isPromoLoaded: boolean,
  isCatalogLoaded: boolean,
  comments: ReviewType[],
  isFavoriteLoaded: boolean,
  isCurrentFilmLoaded: boolean
};

export type reviewDataType = {
  isReviewPosted: boolean,
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
