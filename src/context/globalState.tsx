import { createContext, useEffect, useReducer } from "react";
import { Hit, Search } from "../models";
import appReducer from "./appReducer";

let initialHits: Hit[] = []
let initialFilterUrl: String = ''

const dataHitsStorage = window.localStorage.getItem('hits'); 
const dataFilterUrlStorage = window.localStorage.getItem('filterUrl'); 
if ( dataHitsStorage ) initialHits = JSON.parse(dataHitsStorage)
if ( dataFilterUrlStorage ) initialFilterUrl = JSON.parse(dataFilterUrlStorage)

const initialState = {
  hits: initialHits,
  addFavorites: (likeCard: Hit)=>{},
  removeFavorites: (story_id: String)=>{},
  filterUrl: initialFilterUrl,
  updateFilterUrl: (filterUrl: String)=>{}
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }: {children: any}) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function addFavorites(likeCard: Hit) {
    dispatch({type: "ADD_FAVORITES", payload: { ...likeCard, "favorite": true }})    
  }

  function removeFavorites(story_id: String) {
    dispatch({type: "REMOVE_FAVORITES", payload: story_id})
  }

  function updateFilterUrl(story_id: String) {
    dispatch({type: "UPDATE_FILTER", payload: story_id})
  }

  return (
    <GlobalContext.Provider
      value={{
        hits: state.hits,
        addFavorites,
        removeFavorites,
        filterUrl: state.filterUrl,
        updateFilterUrl
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}