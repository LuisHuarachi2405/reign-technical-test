
import { ReactNode } from 'react';
import styles from './index.module.scss'
import cx from 'classnames'

const Font = ({children, classname = '', type = 'text'}:{children: ReactNode, classname: String, type: String}) => {
  return ( 
    type === 'text' ?
    (
      <p className={cx(styles.text, classname)}>
        {children}
      </p>
    ) :
    (
    <h2 className={cx(styles.heading, classname)}>
      {children}
    </h2>
    )
  )
}

export default Font;