import { Fragment, useEffect, useContext } from 'react';
import { Card } from '../../components';
import { GlobalContext } from '../../context/globalState';
import { Hit } from '../../models';

const Favorites = () => {
  const { hits } = useContext(GlobalContext);

  useEffect(() => {    
    localStorage.setItem("hits", JSON.stringify(hits))
  }, [hits]);

  return (
    <Fragment>
      {
        hits?.map((value: Hit, index: number) => {
          return (
            <Card key={index} objectID={value.objectID} favorite={value.favorite} story_url={value.story_url} story_title={value.story_title} author={value.author} created_at={new Date(value.created_at)} />
          )
        })
      }
    </Fragment>
  )
}

export default Favorites;