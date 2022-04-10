import { AuthorizationStatusName } from '../const/const';

export const isCheckedAuth = (authorizationStatus: AuthorizationStatusName): boolean =>
  authorizationStatus === AuthorizationStatusName.Unknown;

