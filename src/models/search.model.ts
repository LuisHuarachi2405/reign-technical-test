export interface Search {
  hits:                Hit[];
  nbHits:              number;
  page:                number;
  nbPages:             number;
  hitsPerPage:         number;
  exhaustiveNbHits:    boolean;
  exhaustiveTypo:      boolean;
  exhaustive:          Exhaustive;
  query:               string;
  params:              string;
  processingTimeMS:    number;
  processingTimingsMS: ProcessingTimingsMS;
}

export interface Exhaustive {
  nbHits: boolean;
  typo:   boolean;
}

export interface Hit {
  created_at:       Date;
  title:            null;
  url:              null;
  author:           string;
  points:           null;
  story_text:       null;
  comment_text:     string;
  num_comments:     null;
  story_id:         number;
  story_title:      string;
  story_url:        string;
  parent_id:        number;
  created_at_i:     number;
  _tags:            string[];
  objectID:         string;
  _highlightResult: HighlightResult;
}

export interface HighlightResult {
  author:       Author;
  comment_text: Author;
  story_title:  Author;
  story_url:    Author;
}

export interface Author {
  value:             string;
  matchLevel:        MatchLevel;
  matchedWords:      string[];
  fullyHighlighted?: boolean;
}

export enum MatchLevel {
  Full = "full",
  None = "none",
}

export interface ProcessingTimingsMS {
  afterFetch: AfterFetch;
  fetch:      Fetch;
  getIdx:     GetIdx;
  total:      number;
}

export interface AfterFetch {
  format: Format;
  total:  number;
}

export interface Format {
  highlighting: number;
  total:        number;
}

export interface Fetch {
  total: number;
}

export interface GetIdx {
  load:  Load;
  total: number;
}

export interface Load {
  dicts: number;
  total: number;
}