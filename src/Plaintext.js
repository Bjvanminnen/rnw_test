import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { connect } from 'react-redux';
import { selectCharacter } from './redux/plaintext';

const styles = {
  plaintext: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  text: {
    margin: 1,
    padding: 2,
    backgroundColor: 'white',
    fontFamily: '"Courier New", monospace'
  }
};

const Character = connect(null, { selectCharacter })(
  ({char, index, selectCharacter}) => (
    <TouchableHighlight
      onPress={() => selectCharacter(index, char)}
    >
      <Text style={styles.text}>{char}</Text>
    </TouchableHighlight>
  )
);

const Plaintext = ({characters}) => (
  <View style={styles.plaintext}>
    {
      characters.map((char, index) => (
        <Character
          key={index}
          char={char}
          index={index}
        />
      ))
    }
  </View>
);

export default connect(state => ({
  characters: state.plaintext.letters
}))(Plaintext);
