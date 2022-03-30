import UserBlockLogged from './user-block-logged';
import UserBlockUnlogged from './user-block-unlogged';
import { useAppSelector } from '../../hooks';

function UserBlock():JSX.Element {
  const {authorizationStatus} = useAppSelector((state) => state);

  return (
    <ul className="user-block">
      {authorizationStatus === 'AUTH' && <UserBlockLogged />}
      {(authorizationStatus === 'NO_AUTH' || authorizationStatus === 'UNKNOWN') && <UserBlockUnlogged />}
    </ul>
  );
}

export default UserBlock;
