import { Hit, Search } from "../models";

type ActionType = 
    | { type: 'ADD_FAVORITES', payload: Hit }
    | { type: 'REMOVE_FAVORITES', payload: String}
    | { type: 'UPDATE_FAVORITES', payload: Hit[]}
    | { type: 'UPDATE_FILTER', payload: String}

export default function appReducer(state: any, action: ActionType ) {
  switch (action.type) {
    case "ADD_FAVORITES":
      return {
        ...state,
        hits: [...state.hits, action.payload]
      }
    case "REMOVE_FAVORITES":
      return {
        ...state,
        hits: state.hits.filter((hit: Hit) => hit.objectID !== action.payload)
      }
    case "UPDATE_FILTER":
      return {
        ...state,
        filterUrl: action.payload
      }
    default:
      return state;
  }
}