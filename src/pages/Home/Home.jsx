import React, { useState } from 'react';
import { useAsync, useFetchAndLoad } from '../../hooks';
import { getPostsAngular } from '../../services/search.service';

const Home = () => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [data, setData] = useState({});
  const getApiData = async () => await callEndpoint(getPostsAngular());

  const adaptSearch = (data) => {
    setData(data)
    console.log(data.hits);
  }

  useAsync(getApiData, adaptSearch, () => {})

  return ( 
    <div>
      Mi home
    </div>
  )
}

export default Home;