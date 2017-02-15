import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux';
import getStore from './redux';
import BrailleCard from './BrailleCard';
import Plaintext from './Plaintext';

// Styles
const styles = StyleSheet.create({
  main: {
    flex: 1,
    // flexDirection: 'column',
    // flexWrap: 'wrap',
    // doesnt work in RN
    // alignContent: 'flex-start',
    width: 320,
    height: 480,
    backgroundColor: '#eeeeee'
  },
  group: {
    // flexDirection: 'row'
  }
});

// Components
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#1234567890";
let ungrouped = characters.split('');
const grouped = [];
while (ungrouped.length) {
  grouped.push(ungrouped.splice(0, 6));
}

const App = () => (
  <Provider store={getStore()}>
    <View style={styles.main}>
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
