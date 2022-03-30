import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';

function UserBlockUnlogged(): JSX.Element {

  return (
    <Link
      className="user-block__link"
      to={AppRoute.Login}
    >
          Sign in
    </Link>

  );
}

export default UserBlockUnlogged;
