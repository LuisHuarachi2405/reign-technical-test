import { useState, useContext } from 'react';
import { Card, Pagination, Select, Tapbar } from '../../components';
import { GlobalContext } from '../../context/globalState';
import styles from './index.module.scss'

const Favorites = () => {
  const { hits } = useContext(GlobalContext);

  return (
    <div className={styles.main}>
      <div>Hacker News</div>
      <div className={styles.container}>
        <div className={styles.inner}>
          <Tapbar/>
          <Select/>
          <div className={styles.posts}>
            {
              hits?.map(value => {
                return (
                  <Card favorite={false} story_url={value.story_url} story_title={value.story_title} author={value.author} created_at={new Date(value.created_at)} />
                )
              })
            }
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  )
}

export default Favorites;