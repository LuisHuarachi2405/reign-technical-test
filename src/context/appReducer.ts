import { Hit, Search } from "../models";

type ActionType = 
    | { type: 'ADD_FAVORITES', payload: Hit }
    | { type: 'REMOVE_FAVORITES' }

export default function appReducer(state: any, action: ActionType ) {
  switch (action.type) {
    case "ADD_FAVORITES":
      return {
        ...state,
        hits: [...state.hits, action.payload]
      };
    case "REMOVE_FAVORITES":
      return {
        ...state,
        favorite: true
      };
    default:
      return state;
  }
}