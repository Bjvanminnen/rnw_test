import React from 'react';
import { TouchableHighlight } from 'react-native';

const styles = {
  main: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    margin: 5
  },
  focus: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'black'
  }
};

const CryptoCard = ({hasFocus, onPress, children, style}) => (
  <TouchableHighlight
    style={[
      styles.main,
      (hasFocus && styles.focus),
      style
    ]}
    onPress={onPress}
  >
    {children}
  </TouchableHighlight>
);
export default CryptoCard;
