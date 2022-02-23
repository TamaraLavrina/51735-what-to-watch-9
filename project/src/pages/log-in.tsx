import Footer from '../components/footer/footer';
import Logo from '../components/logo/logo';
import SignIn from '../components/sign-in/sign-in';

function LogIn():JSX.Element {
  return(
    <div className="user-page">
      <header className="page-header user-page__head">

        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <SignIn />

      <Footer />

    </div>
  );
}

export default LogIn;
