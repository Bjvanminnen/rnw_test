import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// Styles
const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: 320,
    height: 480,
    borderWidth: 1,
    borderColor: 'black'
  }
});

// Components
const App = () => (
  <View style={styles.view}>
    <Text>
      test
    </Text>
  </View>
)

export default App;
