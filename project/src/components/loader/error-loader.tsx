import styles from './loader.module.css';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo';


function ErrorLoader(): JSX.Element {
  return (
    <>
      <Logo />
      <div className={styles.preloader}>
        <div className={styles.preloader__row}>
          <div className={styles.preloader__item}></div>
          <div className={styles.preloader__item}></div>
        </div>
      </div>
      <h1 className={styles.header}> Something go wrong, try again</h1>
      <Link to="/" className={styles.goHome}>to Main Paige</Link>
    </>

  );
}

export default ErrorLoader;
