import styles from './index.module.scss'

const Select = () => {
  return ( 
    <div className={styles.select}>
      <div className={styles.selectInner}>
      <select className={styles.selectInput}>
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      </div>
    </div>
  );
}

export default Select;