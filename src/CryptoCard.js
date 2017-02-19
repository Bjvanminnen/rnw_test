import React, { PropTypes } from 'react';
import { TouchableHighlight } from 'react-native';

const styles = {
  main: {
    backgroundColor: 'white',
    margin: 5
  },
  focus: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'black'
  }
};

const CryptoCard = ({hasFocus, width, height, onPress, children, style}) => (
  <TouchableHighlight
    style={[
      styles.main,
      (hasFocus && styles.focus),
      style,
      { width, height }
    ]}
    onPress={onPress}
  >
    {children}
  </TouchableHighlight>
);
CryptoCard.propTypes = {
  hasFocus: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object
};

export default CryptoCard;
