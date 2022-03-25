import {Navigate} from 'react-router-dom';
import { AppRoute, AuthorizationStatusName } from '../../const/const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatusName;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatusName.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
