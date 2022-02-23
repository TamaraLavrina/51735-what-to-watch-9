import Footer from '../components/footer/footer';
import HeaderSignIn from '../components/header/header';
import {Link} from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <div className='user-page'>
      <HeaderSignIn />
      <section className='catalog'>
        <div className="page-content">
          <h1>404. Page not found</h1>
          <Link to="/">Вернуться на главную</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default NotFound;
