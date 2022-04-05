import {Navigate} from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatusName } from '../../const/const';
import { isCheckedAuth } from '../../services/utils';
import Loader from '../../components/loader/loader';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { authorizationStatus} = useAppSelector(({USER}) => USER);
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
