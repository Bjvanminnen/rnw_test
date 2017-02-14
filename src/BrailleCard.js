import React, { Component } from 'react';
import { View } from 'react-native';
import CryptoCard from './CryptoCard';

const CIRCLE_SIZE = 7;

const Alphabet = {
  A: '100000',
  B: '101000',
  C: '110000',
  D: '110100',
  E: '100100',
  F: '111000',
  G: '111100',
};

const BrailleDot = ({filled}) => (
  <View
    style={{
      width: CIRCLE_SIZE,
      height: CIRCLE_SIZE,
      margin: 3,
      borderRadius: CIRCLE_SIZE / 2,
      borderWidth: 1,
      borderColor: 'black',
      backgroundColor: filled ? 'black' : 'white'
    }}
  />
);

const styles = {
  card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center'
  }
};

export default class BrailleCard extends Component {
  render() {
    const { character } = this.props;
    const dots = (Alphabet[character] || '000000').split('').map(x => x === '1');
    return (
      <CryptoCard>
        <View style={styles.card}>
          <View style={styles.column}>
            <BrailleDot filled={dots[0]}/>
            <BrailleDot filled={dots[2]}/>
            <BrailleDot filled={dots[4]}/>
          </View>
          <View style={styles.column}>
            <BrailleDot filled={dots[1]}/>
            <BrailleDot filled={dots[3]}/>
            <BrailleDot filled={dots[5]}/>
          </View>
        </View>
      </CryptoCard>
    );
  }
}
