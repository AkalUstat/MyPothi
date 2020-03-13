/* eslint-disable import/extensions */
import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { StoreProvider } from 'easy-peasy';
import Icon from 'react-native-vector-icons/Feather';
import store from './config/app_state/easy-peasy/models';

import { useMainStoreActions } from './config/app_state/easy-peasy/hooks';
import {
  fetchAllGutkas,
  getCurrentItems,
  populateData,
  isDataEmpty,
} from './config/database/local_database';

import Routes from './Routes';
import { useValues } from './config/app_state/state_hooks';

const theme = {
  ...DefaultTheme,
  dark: false,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#99AAB5',
    backdrop: '#FFA500',
  },
};

const darkTheme = {
  ...DefaultTheme,
  dark: true,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#99AAB5',
    surface: '#99AAB5',
    background: '#2C2F33',
    backdrop: '#FFA500',
    text: '#FFFFFF',
  },
};
const App = () => {
  const { isDarkMode } = useValues( 'themeModel' );
  const initCurrUpdate = useMainStoreActions(
    ( actions ) => actions.currentModel.initialUpdate,
  );
  const initialGutkaUpdate = useMainStoreActions(
    ( actions ) => actions.gutkaModel.initialUpdate,
  );

  // const netInfo = useNetInfo();

  const checkDB = async () => {
    if ( isDataEmpty() ) {
      await populateData();
    }
  };
  useEffect( () => {
    checkDB().then( async () => {
      const names = fetchAllGutkas();
      const items = getCurrentItems( names[0][0], names[0][1] );
      initCurrUpdate( [ names[0], items ] );
      initialGutkaUpdate( [ names, true ] );
    } );
  }, [] );

  return (
    <PaperProvider
    theme={isDarkMode ? darkTheme : theme}
    settings={{
      icon: ( props ) => <Icon {...props} />,
    }}>
        <Routes />
    </PaperProvider>
  );
};
const withStore = () => (
    <StoreProvider store={store}>
        <App />
    </StoreProvider>
);

export default withStore;
