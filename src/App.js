import React from 'react'
import { StyleSheet, View, Dimensions, Platform } from 'react-native'
import { Provider } from 'react-redux';
import getStore from './redux';
import BrailleCipher from './BrailleCipher';
import Plaintext from './Plaintext';
import CipherSelector from './CipherSelector';

// TODO - own repo with better name
// TODO - braille not hard coded. do another cipher
// TODO - allow adding spaces/line breaks

// Styles
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  main: {
    marginTop: 20,
    width: Platform.OS === 'web' ? 375 : width,
    height: Platform.OS === 'web' ? 667 : height,
    backgroundColor: '#eeeeee'
  }
});

// Components
const App = () => (
  <Provider store={getStore()}>
    <View style={styles.main}>
      <CipherSelector/>
      <BrailleCipher/>
      <Plaintext/>
    </View>
  </Provider>
)

export default App;
