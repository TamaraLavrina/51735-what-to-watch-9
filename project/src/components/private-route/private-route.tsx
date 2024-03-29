import {Navigate} from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatusName } from '../../const/const';
import { isCheckedAuth } from '../../services/utils';
import Loader from '../../components/loader/loader';
import { getAuthorizationStatus } from '../../store/user/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const { children} = props;

  if (
    isCheckedAuth(authorizationStatus)
  ) {
    return <Loader />;
  }

  return (
    authorizationStatus === AuthorizationStatusName.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
