import React, { useState } from 'react';
import { Card, Pagination, Select, Tapbar } from '../../components';
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
        <div>Hacker News</div>
        <div className={styles.container}>
          <div className={styles.inner}>
            <Tapbar/>
            <Select/>
            <div className={styles.posts}>
              {
                loading ? 'loading'
                :
                data?.hits.map(value =>{
                  return (
                    <Card story_url={''} story_title={value.story_title} author={value.author} created_at={value.created_at} />
                  )
                })
              }
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;