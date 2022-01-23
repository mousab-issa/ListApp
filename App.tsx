

import React from 'react';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';

import { Provider } from 'react-redux'

import Navigator from 'src/navigation/navigator'

import store from 'src/store/store'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Provider store={store}>
        <Navigator />
      </Provider>
    </>
  );
};

export default App;
