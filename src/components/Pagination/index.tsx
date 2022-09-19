import styles from './index.module.scss'
import { Link } from "react-router-dom";
import cx from 'classnames'

const Pagination = () => {
  return ( 
    <div className={styles.pagination}>
      <div className={styles.paginationInner}>
        <nav className={styles.paginationNav} aria-label="Page navigatiion">
          <ul className={styles.paginationList}>
            <li className={styles.paginationListItem}>
              <Link className={styles.paginationLink} to="#">Previous</Link>
            </li>
            <li className={styles.paginationListItem}>
              <Link className={cx(styles.paginationLink, styles.paginationLinkSelect)} to="#">1</Link>
            </li>
            <li className={styles.paginationListItem}>
              <Link className={styles.paginationLink} to="#">2</Link>
            </li>
            <li className={styles.paginationListItem}>
              <Link className={styles.paginationLink} to="#">3</Link>
            </li>
            <li className={styles.paginationListItem}>
              <Link className={styles.paginationLink} to="#">Next</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Pagination;