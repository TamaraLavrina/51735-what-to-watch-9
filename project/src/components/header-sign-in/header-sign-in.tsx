import Logo from '../logo/logo';

function HeaderSignIn():JSX.Element {
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src="img/bg-header.jpg"  alt = "header layout"/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header">
        <Logo/>

        <div className="user-block">
          <a href="sign-in.html" className="user-block__link">Sign in</a>
        </div>
      </header>

    </section>
  );
}

export default HeaderSignIn;
