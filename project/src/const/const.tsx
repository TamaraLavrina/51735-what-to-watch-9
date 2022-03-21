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

enum Genres {
  'All genres',
  'Comedies',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers',
}

const MAXSCORE = 10;
const DELAY = 1000;
const FILMS_MAX_COUNT = 4;
const TABS = ['Overview', 'Details', 'Reviews'];
const FILM_COUNT = 4;


export {AppRoute, AuthorizationStatus, DEFAULT_ACTIVE_GENRE, Genres, MAXSCORE, DELAY, FILMS_MAX_COUNT, TABS, FILM_COUNT };
