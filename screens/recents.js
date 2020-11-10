import * as React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import {userAction} from'./../_action'
import {useDispatch,useSelector} from 'react-redux'
const Recents = () => {

  
  return (
    <View style={styles.container}>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 59,
    backgroundColor: "rgba(31,178,204,1)",
    borderRadius: 5,
    justifyContent: "center"
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 20,
    alignSelf: "center"
  },
});

export default Recents;
