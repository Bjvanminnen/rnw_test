import React from 'react'
import { StyleSheet, View } from 'react-native'
import BrailleCard from './BrailleCard';

// Styles
const styles = StyleSheet.create({
  outer: {
    flex: 1
  },
  main: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // doesnt work in RN
    // alignContent: 'flex-start',
    width: 320,
    height: 480,
    backgroundColor: '#eeeeee'
  }
});

// Components
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const App = () => (
  <View style={styles.outer}>
    <View style={styles.main}>
      {characters.split('').map((c, index) => (
        <BrailleCard
          key={index}
          character={c}
        />
      ))}
    </View>
  </View>
)

export default App;
