import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import CryptoCard from './CryptoCard';
import { addCharacter } from './redux/plaintext';
import { clearHighlight } from './redux/highlightedCard';

const Alphabet = {
  A: '01',
  B: '1000',
  C: '1010',
  D: '100',
  E: '0',
  F: '0010',
  G: '110',
  H: '0000',
  I: '00',
  J: '0111',
  K: '101',
  L: '0100',
  M: '11',
  N: '10',
  O: '111',
  P: '0110',
  Q: '1101',
  R: '010',
  S: '000',
  T: '1',
  U: '001',
  V: '0001',
  W: '011',
  X: '1001',
  Y: '1011',
  Z: '1100',
  '1': '01111',
  '2': '00111',
  '3': '00011',
  '4': '00001',
  '5': '00000',
  '6': '10000',
  '7': '11000',
  '8': '11100',
  '9': '11110',
  '0': '11111',
};

const styles = {
  contents: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  textColumn: {
    flexDirection: 'column',
    marginRight: 4
  },
  text: {
    color: 'lightgray'
  }
};

class MorseCard extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  // TODO - should onPress be on CryptoCard? (probably yes)
  // TODO - dont clear highlight if we're not on the last index
  onPress() {
    const { character, addCharacter, clearHighlight } = this.props;
    addCharacter(character);
    clearHighlight();
  }

  render() {
    const { highlightedCard, character } = this.props;
    const text = (Alphabet[character]).split('').map(x => x === '0' ? '.' : '-').join('');
    return (
      <CryptoCard
        width={50}
        height={20}
        hasFocus={highlightedCard === character}
        onPress={this.onPress}
      >
        <View style={styles.contents}>
          <View style={styles.textColumn}>
            <Text style={styles.text}>{character}</Text>
          </View>
          <View style={styles.card}>
            {text}
          </View>
        </View>
      </CryptoCard>
    );
  }
}

export default connect(state => ({
  highlightedCard: state.highlightedCard
}), {
  addCharacter,
  clearHighlight
})(MorseCard);
