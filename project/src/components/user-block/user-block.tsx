import UserBlockLogged from './user-block-logged';
import UserBlockUnlogged from './user-block-unlogged';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user/selectors';

function UserBlock():JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <ul className="user-block">
      {authorizationStatus === 'AUTH' && <UserBlockLogged />}
      {(authorizationStatus === 'NO_AUTH' || authorizationStatus === 'UNKNOWN') && <UserBlockUnlogged />}
    </ul>
  );
}

export default UserBlock;
