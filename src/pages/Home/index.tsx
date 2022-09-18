import React, { useState } from 'react';
import Card from '../../components/Card';
import { useAsync, useFetchAndLoad } from '../../hooks';
import { Hit, Search } from '../../models';
import { getPostsAngular } from '../../services/search.service';
import styles from './index.module.scss'

const Home = () => {
  const { loading, callEndpoint } = useFetchAndLoad()
  const [data, setData] = useState<Search | null>()
  const getApiData = async () => await callEndpoint(getPostsAngular())

  const adaptSearch = (data: Search) => {
    setData(data)
    console.log(data.hits);
  }

  useAsync(getApiData, adaptSearch, () => {})

  return (
    <>
      <div className={styles.main}>
        <div>header</div>
        <div className={styles.container}>
          <div className={styles.inner}>
            <div className={styles.tapbar}>tapbar</div>
            <div className={styles.select}>input select</div>
            <div className={styles.posts}>
              {
                loading ? 'loading'
                :
                data?.hits.map(value =>{
                  return (
                    <Card comment={value.comment_text} author={value.author} created_comment={value.created_at} />
                  )
                })
              }
            </div>
            <div>pagination</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;