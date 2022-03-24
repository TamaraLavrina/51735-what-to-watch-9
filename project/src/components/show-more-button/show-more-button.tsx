import { useAppDispatch } from '../../hooks';
import { increaseFilmsCount } from '../../store/action';

function ShowMoreButton(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button"
        onClick={() => {
          dispatch(increaseFilmsCount());
        }}
      >Show more
      </button>
    </div>
  );
}

export default ShowMoreButton;
