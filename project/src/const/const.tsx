 enum AppRoute {
  Route = '/',
  Movie = '/films/:id',
  Login = '/login',
  MyList = '/mylist',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '/404',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const DEFAULT_ACTIVE_GENRE = 'All genres';


const MAX_SCORE = 10;
const DELAY = 1000;
const FILMS_MAX_COUNT = 4;
const TABS = ['Overview', 'Details', 'Reviews'];
const FILM_COUNT = 4;
const GENRES_MAX_COUNT = 9;


export {AppRoute, AuthorizationStatus, DEFAULT_ACTIVE_GENRE,  MAX_SCORE, DELAY, FILMS_MAX_COUNT, TABS, FILM_COUNT, GENRES_MAX_COUNT  };
