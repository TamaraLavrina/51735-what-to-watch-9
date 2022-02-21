function FilmButtons():JSX.Element {
  return (
    <div className="film-card__buttons">
      <button className="btn btn--play film-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button className="btn btn--list film-card__button" type="button">
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
        <span>My list</span>
      </button>
      <a href="add-review.html" className="btn film-card__button">Add review</a>
    </div>
  );
}

export default FilmButtons;
