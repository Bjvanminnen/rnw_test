import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const styles = {
  main: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 5
  },
  button: {
    marginLeft: 5,
    marginRight: 5
  }
};

// TODO: Clicking left/right should change ciphers. Clicking name should give us
// a dropdown.
const CipherSelector = ({cipher}) => (
  <View style={styles.main}>
    <Text style={styles.button}>{"<"}</Text>
    <Text>{cipher}</Text>
    <Text style={styles.button}>{">"}</Text>
  </View>
);

export default connect(state => ({
  cipher: 'Braille'
}))(CipherSelector);
