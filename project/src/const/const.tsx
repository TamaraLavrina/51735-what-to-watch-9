enum AppRoute {
  Route = '/',
  Movie = '/films/:id',
  Login = '/login',
  MyList = '/mylist',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '/404',
  CommentsFilm = '/comments',
}

enum AuthorizationStatusName {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const DEFAULT_ACTIVE_GENRE = 'All genres';
const MAX_SCORE = 10;
const DELAY = 1000;
const FILMS_MAX_COUNT = 4;
const TABS = ['Overview', 'Details', 'Reviews'];
const FILM_COUNT = 8;
const GENRES_MAX_COUNT = 9;

enum APIRoute {
  Films = '/films',
  Promo = '/promo',
  Favorite = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

enum HttpCode {
  BadRequest = 400,
  Unauthorized= 401,
  NotFound = 404,
}


enum NameSpace {
  films = 'FILMS',
  reviews = 'REVIEWS',
  user = 'USER',
}

const MAX_REVIEW_LENGTH = 400;
const MIN_REVIEW_LENGTH = 50;

export {
  AppRoute,
  AuthorizationStatusName,
  DEFAULT_ACTIVE_GENRE,
  MAX_SCORE,
  DELAY,
  FILMS_MAX_COUNT,
  TABS,
  FILM_COUNT,
  GENRES_MAX_COUNT,
  HttpCode,
  APIRoute,
  MAX_REVIEW_LENGTH,
  MIN_REVIEW_LENGTH,
  NameSpace
};
