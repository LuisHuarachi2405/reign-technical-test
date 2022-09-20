import styles from './index.module.scss'
import { Link, useLocation } from "react-router-dom";
import cx from 'classnames'
import { useEffect, useState } from 'react';
import Font from '../Fonts';

const Tapbar = () => {
  let location = useLocation()
  const [isFavorites, setIsFavorites] = useState(false);

  useEffect(() => {
    location.pathname === "/favorites" ?
    setIsFavorites(true) :
    setIsFavorites(false) 
  }, [location]);

  return ( 
    <div className={styles.tapbar}>
      <div className={styles.tapbarInner}>
        <Link className={cx(styles.tapbarLink, !isFavorites && styles.tapbarLinkSelect)} to={"/"}>
          <Font classname={styles.tapbarLinkCopy} type={'title'}>
            All
          </Font>
        </Link>
        <Link className={cx(styles.tapbarLink, isFavorites && styles.tapbarLinkSelect)} to={"/favorites"}>
          <Font classname={styles.tapbarLinkCopy} type={'title'}>
            My faves
          </Font>
        </Link>
      </div>
    </div>
   );
}

export default Tapbar;