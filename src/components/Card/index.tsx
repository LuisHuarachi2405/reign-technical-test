import { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/globalState';
import { Hit } from '../../models';
import Font from '../Fonts';
import styles from './index.module.scss'

const Card = ({story_title, story_url, objectID, author, created_at, favorite = false}: Hit) => {
  const [like, setLike] = useState(favorite)
  const { addFavorites, removeFavorites } = useContext(GlobalContext);
  const [hoursCreateAt, setHoursCreateAt] = useState(0)
  const [minsCreateAt, setMinsCreateAt] = useState(0)

  const IconHeart = ({like}: {like: boolean}) => {
    return(
      !like ? 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22">
          <path fill="#DD0031" d="M12 8.229C12.234 7.109 13.547 2 17.382 2 19.602 2 22 3.551 22 7.003c0 3.907-3.627 8.47-10 12.629C5.627 15.473 2 10.91 2 7.003c0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zM0 7.003C0 11.071 3.06 16.484 12 22c8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737C9.662-1.996 0-1.004 0 7.003z"/>
        </svg>
      :
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22">
        <path fill="#DD0031" d="M12 3.248C8.852-2.154 0-.577 0 6.192 0 10.853 5.571 15.619 12 22c6.43-6.381 12-11.147 12-15.808C24-.6 15.125-2.114 12 3.248z"/>
      </svg>
    )
  }
  
  const IconClock = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
        <path fill="#606060" d="M8 1.333c3.676 0 6.667 2.991 6.667 6.667 0 3.676-2.991 6.667-6.667 6.667-3.676 0-6.667-2.991-6.667-6.667 0-3.676 2.991-6.667 6.667-6.667zM8 0C3.582 0 0 3.582 0 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm.667 8V4H7.333v5.333H12V8H8.667z"/>
      </svg>
    )
  }

  const toogleLike = () => {
    setLike(!like)
  }

  const handleLikeAddButton = () => {
    addFavorites({story_title, objectID, story_url, author, created_at, favorite: true}) 
    toogleLike()
  }

  const handleLikeRemoveButton = () => {
    removeFavorites(objectID)
    toogleLike()
  }

  const convertCreateAt = () => {
    let fechToDate = Date.now();
    let fechInit: Date = new Date(created_at);
    let fechFin: Date = new Date(fechToDate)

    let differenceHours = fechFin.getHours() - fechInit.getHours()
    let differenceMins = fechFin.getMinutes() - fechInit.getMinutes()

    setHoursCreateAt(differenceHours)
    setMinsCreateAt(differenceMins)  
  }

  useEffect(() => {
    convertCreateAt()
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <a href={`${story_url}`} className={styles.cardContentLeft} target="_blank" rel="noreferrer">
          <div className={styles.cardInfoTop}>
            <Font type={'text'} classname={styles.cardInfoCopyTop}>
              <IconClock/> {hoursCreateAt > 0 ? hoursCreateAt : minsCreateAt} {hoursCreateAt > 0 ? 'hours' : 'minuts'} ago by {author}
            </Font>
          </div>
          <div className={styles.cardTitle}>
            <Font classname={styles.cardTitleCopy} type={'title'}>
              {story_title}
            </Font>
          </div>
        </a>
        <div className={styles.cardContentRight}>
          <button className={styles.cardButtonLike} onClick={like ? handleLikeRemoveButton : handleLikeAddButton }>
            <IconHeart like={like} />
          </button>
        </div>
      </div>
    </div>
  )
}  

export default Card;