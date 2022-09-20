import { Search } from "../models";

export const createSearchAdapter = (search: Search) => ({
  hits: search.hits,
  nbHits: search.nbHits,
  page: search.page,
  nbPages: search.nbPages,
  hitsPerPage: search.hitsPerPage,
  exhaustiveNbHits: search.exhaustiveNbHits,
  exhaustiveTypo: search.exhaustiveTypo,
  exhaustive: search.exhaustive,
  query: search.query,
  params: search.params,
  processingTimeMS: search.processingTimeMS,
  processingTimingsMS: search.processingTimingsMS
})
