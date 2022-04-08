import {AuthorizationStatusName, NameSpace} from '../../const/const';
import {State} from '../../types/state';

const getAuthorizationStatus = (state: State): AuthorizationStatusName => state[NameSpace.user].authorizationStatus;
const getActiveGenres = (state: State): string => state[NameSpace.user].activeGenre;
const getShownFilmsCount = (state: State): number => state[NameSpace.user].shownFilmsCount;

export { getAuthorizationStatus, getActiveGenres, getShownFilmsCount };
