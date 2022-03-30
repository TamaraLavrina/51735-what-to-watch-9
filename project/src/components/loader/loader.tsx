import styles from './loader.module.css';

function Loader(): JSX.Element {
  return (
    <div className={styles.preloader}>
      <div className={styles.preloader__row}>
        <div className={styles.preloader__item}></div>
        <div className={styles.preloader__item}></div>
      </div>
    </div>
  );
}

export default Loader;
