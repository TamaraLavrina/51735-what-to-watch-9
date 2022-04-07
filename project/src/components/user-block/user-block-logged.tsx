import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { AppRoute } from '../../const/const';
import { getAvatarUrl } from '../../services/avatarUrl';

function UserBlockLogged(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const avatarUrl = getAvatarUrl();

  return (
    <div className="user-block">
      <li className="user-block__item">
        <div
          className="user-block__avatar"
          onClick={() => navigate(AppRoute.MyList)}
        >
          <img src={avatarUrl} alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <Link
          className="user-block__link"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
          to='/'
        >
          Sign out
        </Link>
      </li>
    </div>
  );
}

export default UserBlockLogged;

