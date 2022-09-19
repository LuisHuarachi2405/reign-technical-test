import styles from './index.module.scss'
import { Link } from "react-router-dom";
import cx from 'classnames'

const Tapbar = () => {
  return ( 
    <div className={styles.tapbar}>
      <div className={styles.tapbarInner}>
        <Link className={cx(styles.tapbarLink, styles.tapbarLinkSelect)} to={"/"}>All</Link>
        <Link className={styles.tapbarLink} to={"/favorites"}>My faves</Link>
      </div>
    </div>
   );
}

export default Tapbar;