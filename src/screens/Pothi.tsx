/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useState, useEffect,
} from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import { useTheme } from 'react-native-paper';

import ShimmeringLine from '../components/main/blocks/ShimmeringBlock';
import Toolbar from '../components/main/Toolbar';
import HighlightSelector from '../components/main/HighlightSelector';


import { EditCtx } from '../store/context_stores/Contexts';
import { useValues } from '../store/StateHooks';
import Viewer from '../components/main/Viewer';
import { parseLines } from '../database/BanidbApi';

const Gutka = () => {
  const theme = useTheme();

  const [ shabads, updateShabads ] = useState( [] );
  const [ isHighlighterVis, toggleHighligher ] = useState( false );
  const [ isLoadingData, updateLoading ] = useState( true );

  const { isEditMode, selectedInfo } = EditCtx.useStoreState( ( store ) => ( { ...store } ) );
  const {
    currentName, currentItems,
  } = useValues( 'currentModel' );

  const [ gutkaName ] = currentName;
  const { updateEditMode } = EditCtx.useStoreActions( ( actions ) => ( { ...actions } ) );
  useEffect( () => {
    updateLoading( true );
  }, [ gutkaName ] );
  useEffect( () => {
    const getLines = async () => {
      const newLines = currentItems.length ? await Promise.all( currentItems.map( ( item ) => parseLines( item ) ) ) : [];
      updateShabads( newLines );
      updateLoading( false );
    };
    setTimeout( () => getLines(), 0 );
  }, [ currentItems ] );


  return (
    <View style={styles.View}>
        <View style={{ flexGrow: 1, flexShrink: 1, backgroundColor: theme.colors.background }}>
        {isLoadingData && (
          <>
                    <ShimmeringLine />
                    <ShimmeringLine />
                    <ShimmeringLine />
                    <ShimmeringLine />
                    <ShimmeringLine />
                    <ShimmeringLine />
                    <ShimmeringLine />
                    <ShimmeringLine />
                    <ShimmeringLine />
                    <ShimmeringLine />
                    <ShimmeringLine />


          </>
        )}
         {!isLoadingData
                   && <Viewer currentItems={currentItems} currentLines={shabads} currentMods={[]}/>}
                            {isHighlighterVis && (
                <HighlightSelector style={styles.Highlighter} currentLine={selectedInfo}/>
                            )}
    </View>

        <Toolbar
        toggleHighligher={() => { toggleHighligher( ( prev ) => !prev ); }}
            style={styles.Footer}
            showMain={isEditMode}
            updateMode={updateEditMode}
            currentLine={selectedInfo}
          />
    </View>
  );
};
const styles = StyleSheet.create( {
  Footer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Highlighter: {
    display: 'flex',
    flexDirection: 'row-reverse',
    paddingBottom: 5,
    width: '100%',
  },
  View: {
    alignContent: 'space-between',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
} );

const withEditCtx = () => (
    <EditCtx.Provider>
        <Gutka />
    </EditCtx.Provider>
);
export default withEditCtx;