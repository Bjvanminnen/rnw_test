import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const styles = {
  plaintext: {
    padding: 10,
    backgroundColor: 'white'
  }
};

const Plaintext = ({text}) => (
  <View style={styles.plaintext}>
    <Text>{text}</Text>
  </View>
);

export default connect(state => ({
  text: state.plaintext
}))(Plaintext);
