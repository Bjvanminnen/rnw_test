import React from 'react';
import { View } from 'react-native';

const styles = {
  main: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    margin: 5
  }
};

const CryptoCard = ({children, style}) => (
  <View style={styles.main}>
    {children}
  </View>
);
export default CryptoCard;
