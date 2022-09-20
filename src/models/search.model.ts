export interface Search {
  hits:                Hit[];
  nbHits:              number;
  page:                number;
  nbPages:             number;
  hitsPerPage:         number;
  exhaustiveNbHits:    boolean;
  exhaustiveTypo:      boolean;
  exhaustive:          Exhaustive;
  query:               String;
  params:              String;
  processingTimeMS:    number;
  processingTimingsMS: ProcessingTimingsMS;
}

export interface Exhaustive {
  nbHits: boolean;
  typo:   boolean;
}

export interface Hit {
  created_at:       Date;
  author:           String;
  story_title:      String;
  story_url:        String;
  favorite:         boolean;
  objectID:         String
}

export interface HighlightResult {
  author:       Author;
  comment_text: Author;
  story_title:  Author;
  story_url:    Author;
}

export interface Author {
  value:             String;
  matchLevel:        MatchLevel;
  matchedWords:      String[];
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
