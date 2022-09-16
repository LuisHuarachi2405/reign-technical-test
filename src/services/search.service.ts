
import { loadAbort } from '../utilities';
import { Search } from '../models';
import axios from 'axios';

const uri = "https://hn.algolia.com/api/v1/search_by_date"

export const getPostsAngular = () => {
  const controller = loadAbort();
  return { call: axios.get<Search>(`${uri}?query=angular&page=0`, { signal: controller.signal }), controller };
};

export const getPostsReact = () => {
  const controller = loadAbort();
  return { call: axios.get<Search>(`${uri}query=reactjs&page=0`, { signal: controller.signal }), controller };
};

export const getPostsVue = () => {
  const controller = loadAbort();
  return { call: axios.get<Search>(`${uri}?query=vuejs&page=0`, { signal: controller.signal }), controller };
};
