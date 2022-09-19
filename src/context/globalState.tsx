import { createContext, useReducer } from "react";
import { Hit, Search } from "../models";

import appReducer from "./appReducer";

const initialState = {
  hits: [
    {
      "created_at": Date(),
      "author": "asdff",
      "story_title": "The $300B Google-Meta advertising duopoly is under attack",
      "story_url": "https://www.economist.com/business/2022/09/18/the-300bn-google-meta-advertising-duopoly-is-under-attack",
    },
  ],
  addFavorites: (likeCard:Hit)=>{}
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }: {children: any}) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function addFavorites(likeCard: Hit) {
    dispatch({type: "ADD_FAVORITES", payload: { ...likeCard, "favorite": true }})
  }

  function removeFavorites() {
    dispatch({type: "REMOVE_FAVORITES"})
  }

  return (
    <GlobalContext.Provider
      value={{
        hits: state.hits,
        addFavorites
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}