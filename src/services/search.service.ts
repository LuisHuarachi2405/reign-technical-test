
import { loadAbort } from '../utilities';
import { Search } from '../models';
import axios from 'axios';

const uri = "https://hn.algolia.com/api/v1/search_by_date"

export const getPosts = (filterUrl: String = '') => {
  const controller = loadAbort();
  return { call: axios.get<Search>(`${uri}?query=${filterUrl}&page=0`, { signal: controller.signal }), controller };
};
