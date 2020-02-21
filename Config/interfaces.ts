import { storedGutka, entryObj, gutkaEntry, SearchType, QueryType } from "./types";
export interface IGutkaCtx {
  gutkas: storedGutka[],
  createGutka: (newGutka: string) => void,
  currentItems: entryObj[],
  removeFromGutka: (id: number) => void,
  addToGutka: (entryId: number, mainLine: string, entryType: gutkaEntry) => void,
  isDataReady: boolean,
  modalVisibile: boolean,
  toggleModal: () => void,
}
export interface IGlobalCtx {
  currentName: string,
  updateCurrentGutka: (name: string) => void,
  isEditMode: boolean,
  toggleEditMode: () => void,
}
export interface ISearchCtx {
  searchType: SearchType,
  updateSearchType: (type: SearchType) => void,
  queryType: QueryType,
  updateQueryType: (type: QueryType) => void,
}
export interface IViewerCtx {
  gurmukhiSize: number,
  translSize: number,
  translitSize: number,
  updateFontSize: (element: string, size: number) => void,
  displayEngTransl: boolean,
  displayPunTansl: boolean,
  displayTranslit: boolean,
  updateDisplay: (element: string, value: boolean) => void,
}

export interface gutkaFetched {
  $isDataReady: boolean,
  $stored: storedGutka[],
  $currentName: string,
  $currentItems: entryObj[]
}

export interface setttingsFetched {
  $displayEngTransl: boolean,
  $displayPunTansl: boolean,
  $displayTranslit: boolean,
  $gurmukhiSize: number,
  $translSize: number,
  $translitSize: number,
}

