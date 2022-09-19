import React from 'react';
import styles from './index.module.scss'

interface propsCard {
  story_title: String,
  story_url: String,
  author: String,
  created_at: Date
}

const Card = ({story_title, story_url, author, created_at}: propsCard) => {

  const IconHeart = () => {
    return(
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22">
          <path fill="#DD0031" d="M12 3.248C8.852-2.154 0-.577 0 6.192 0 10.853 5.571 15.619 12 22c6.43-6.381 12-11.147 12-15.808C24-.6 15.125-2.114 12 3.248z"/>
      </svg>
    )
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardContentLeft}>
          <div className={styles.cardInfoTop}>
            3 hours ago by {author}
          </div>
          <div className={styles.cardTitle}>
            {story_title}
          </div>
        </div>
        <div className={styles.cardContentRight}>
          <IconHeart />
        </div>
      </div>
    </div>
  )
}  

export default Card;