import produce from 'immer';
import { SearchType, QueryType, gutkaEntry } from '../dev_env/types';
import { createNewGukta, fetchAllGutkas, getCurrentItems, deleteGukta, addToGutka, removeFromGutka } from '../database/local_database';

const gutkaAPIFactory = ({ state, setState }) => {
  const createGutka = (newName: string) => {
    createNewGukta(newName);
    const newNames = fetchAllGutkas();
    setState(
      produce(draftState =>
        draftState.gutkaNames = newNames));
  }
  const updateCurrentName = (newName: string) => {
    setState(
      produce(draftState => {
        draftState.currentName = newName;
        draftState.currentItems = getCurrentItems(newName);
      })
    )
  }
  const deleteAGutka = (name: string) => {
    deleteGukta(name);
    setState(
      produce(draftState => draftState.gutkaNames = fetchAllGutkas())
    )
  }
  const addEntry = (id: number, mainLine: string, type: gutkaEntry) => {
    addToGutka(state.currentName, id, mainLine, type);
    setState(
      produce(draftState => draftState.currentItems = getCurrentItems(state.currentName))
    )
  }
  const removeEntry = (id: number) => {
    removeFromGutka(state.currentName, id);
    setState(
      produce(draftState => draftState.currentItems = getCurrentItems(state.currentName))
    )
  }
  const { gutkaNames, currentName, currentItems, isDataReady } = state;
  return {
    gutkaNames,
    currentName,
    currentItems,
    isDataReady,

    createGutka,
    updateCurrentName,
    deleteAGutka,
    addEntry,
    removeEntry
  }
}
const globalApiFactory = ({ state, setState }) => {
  const { currentName } = state;
  const updateCurrentName = (newName: string) => {
    setState(newName);
  }
  return { currentName, updateCurrentName }

}
const viewerApiFactory = ({ state, setState }) => {
  const {
    gurmukhiSize,
    translSize,
    translitSize,
    displayEngTransl,
    displayPunTansl,
    displayTranslit
  } = state;

  const updateElementDisplay = (newVal: number, element: string) => {
    const displaySetting = `display${element}`;
    setState(prevState =>
      ({
        ...prevState,
        [displaySetting]: newVal,
      })
    )
  }
  const updateFontSize = (newSize: number, element: number) => {
    const fontSetting = `${element}Size`;
    setState(prevState =>
      ({
        ...prevState,
        [fontSetting]: newSize,
      })

    )
  }
  return {
    gurmukhiSize,
    translSize,
    translitSize,
    displayEngTransl,
    displayPunTansl,
    displayTranslit,

    updateElementDisplay,
    updateFontSize
  }
}
const searchApiFactory = ({ state, setState }) => {
  const { searchType, queryType } = state;
  const updateSearchType = (newType: SearchType) => {
    setState(
      produce(draftState =>
        draftState.searchType = newType
      ));
  }
  const updateQueryType = (newType: QueryType) => {
    setState(produce(draftState => draftState.queryType = newType));
  }
  return {
    searchType,
    queryType,
    updateSearchType,
    updateQueryType,
  }
}
export {
  gutkaAPIFactory,
  globalApiFactory,
  viewerApiFactory,
  searchApiFactory
}