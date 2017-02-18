import React from 'react'
import { StyleSheet, View, Dimensions, Platform } from 'react-native'
import { Provider } from 'react-redux';
import getStore from './redux';
import BrailleCard from './BrailleCard';
import Plaintext from './Plaintext';
import CipherSelector from './CipherSelector';

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
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#1234567890";
// TODO - could be dependent on dimensions (or just figure out flex)
const CARDS_PER_ROW = 7;
let ungrouped = characters.split('');
const grouped = [];
while (ungrouped.length) {
  grouped.push(ungrouped.splice(0, CARDS_PER_ROW));
}

const App = () => (
  <Provider store={getStore()}>
    <View style={styles.main}>
      <CipherSelector/>
      {
        grouped.map((group, groupKey) => (
          <View style={{flexDirection: 'row'}} key={groupKey} >
            {
              group.map((char, charKey) => (
                <BrailleCard
                  key={charKey}
                  character={char}
                />
              ))
            }
          </View>
        ))
      }
      <Plaintext/>
    </View>
  </Provider>
)

export default App;
