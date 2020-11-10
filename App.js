import 'react-native-gesture-handler';
import * as React from 'react';
import { Provider as StoreProvider } from 'react-redux'
import { store } from './store'
import AppNavigator from './AppNavigator'
const App = () => {
  return (
    <StoreProvider store={store}>
      <AppNavigator></AppNavigator>
    </StoreProvider>

  );
};

export default App;
