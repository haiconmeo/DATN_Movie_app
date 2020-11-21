import 'react-native-gesture-handler';
import * as React from 'react';
import { Provider as StoreProvider } from 'react-redux'
import { store } from './store'
import { View } from 'react-native'
import Appnavigator_2 from './Appnavigator_2'
const App = () => {
  return (
    <StoreProvider store={store}>
      
        {/* <View style={{ backgroundColor: "red" }}> */}
          <Appnavigator_2 />
        {/* </View> */}
     
    </StoreProvider>
  );
};

export default App;
