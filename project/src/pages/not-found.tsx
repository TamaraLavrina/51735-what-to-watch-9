import Footer from '../components/footer/footer';
import HeaderSignIn from '../components/header-sign-in/header-sign-in';
import {Link} from 'react-router-dom';
import styles from './not-found.module.css';


function NotFound(): JSX.Element {
  return (

    <div className={`user-page ${styles.body}`}>
      <HeaderSignIn />
      <section className='catalog'>
        <div className={styles.content}>
          <h1 className={styles.h1}>404. Page not found</h1>
          <Link to="/" className={styles.goHome}>Вернуться на главную</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default NotFound;
