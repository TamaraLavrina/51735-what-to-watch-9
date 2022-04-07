import { NameSpace } from '../../const/const';
import { State } from '../../types/state';
import { CardType, ReviewType } from '../../types/types';

const getCurrentFilm = (state: State): CardType | null =>
  state[NameSpace.films].currentFilm;
const getPromoFilm = (state: State): CardType | null =>
  state[NameSpace.films].promoFilm;
const getFilms = (state: State): CardType[] => state[NameSpace.films].films;
const getSimilarFilms = (state: State): CardType[] =>
  state[NameSpace.films].similarFilms;
const getIsPromoLoaded = (state: State): boolean =>
  state[NameSpace.films].isPromoLoaded;
const getIsCatalogLoaded = (state: State): boolean =>
  state[NameSpace.films].isCatalogLoaded;
const getIsFavoriteLoaded = (state: State): boolean =>
  state[NameSpace.films].isFavoriteLoaded;
const getIsCurrentFilmLoaded = (state: State): boolean =>
  state[NameSpace.films].isCurrentFilmLoaded;
const getComments = (state: State): ReviewType[] =>
  state[NameSpace.films].comments;

export {
  getCurrentFilm,
  getPromoFilm,
  getFilms,
  getSimilarFilms,
  getIsPromoLoaded,
  getIsCatalogLoaded,
  getIsFavoriteLoaded,
  getIsCurrentFilmLoaded,
  getComments
};
