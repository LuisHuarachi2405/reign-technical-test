import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Card } from '../../components';
import { GlobalContext } from '../../context/globalState';
import { useAsync, useFetchAndLoad } from '../../hooks';
import { Hit, Search } from '../../models';
import { getPosts } from '../../services/search.service';


const Home = () => {
  const { hits, filterUrl } = useContext(GlobalContext);
  const { loading, callEndpoint } = useFetchAndLoad()
  const [data, setData] = useState<Search | null>()
  const getApiData = async () => await callEndpoint(getPosts(filterUrl))

  const adaptSearch = (data: Search) => {
    setData(data)
  }

  useAsync(getApiData, adaptSearch, () => {}, [filterUrl])

  useEffect(() => {
    localStorage.setItem("hits", JSON.stringify(hits))
  }, [hits]);

  useEffect(() => {
    localStorage.setItem("filterUrl", JSON.stringify(filterUrl))
  }, [filterUrl]);

  return (
    <Fragment>
      {
        loading ? 'loading'
        :
        data?.hits.map((value: Hit, index: number) => {
          hits?.map((hitStorage: Hit) => {
            if (value.objectID === hitStorage.objectID) {
              value.favorite = true
            }
          })
          
          return (
            <Card key={index} objectID={value.objectID} favorite={value.favorite} story_url={value.story_url} story_title={value.story_title} author={value.author} created_at={value.created_at} />
          )
        })
      }
    </Fragment>
  )
}

export default Home;