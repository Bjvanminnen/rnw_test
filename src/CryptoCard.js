import React from 'react';
import { TouchableHighlight } from 'react-native';

const styles = {
  main: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    margin: 5
  }
};

const CryptoCard = ({onPress, children, style}) => (
  <TouchableHighlight
    style={styles.main}
    onPress={onPress}
  >
    {children}
  </TouchableHighlight>
);
export default CryptoCard;
