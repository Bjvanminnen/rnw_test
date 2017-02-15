import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { connect } from 'react-redux';
import { highlightCard } from './redux/highlightedCard';

const styles = {
  plaintext: {
    padding: 10,
    flexDirection: 'row'
  },
  text: {
    margin: 1,
    padding: 2,
    backgroundColor: 'white'
  }
};

const Character = connect(null, { highlightCard })(
  ({char, highlightCard}) => (
    <TouchableHighlight
      onPress={() => highlightCard(char)}
    >
      <Text style={styles.text}>{char}</Text>
    </TouchableHighlight>
  )
);

const Plaintext = ({characters}) => (
  <View style={styles.plaintext}>
    {
      characters.map((char, index) => (
        <Character char={char} key={index}/>
      ))
    }
    <Character char=" " key="next"/>
  </View>
);

export default connect(state => ({
  characters: state.plaintext
}))(Plaintext);
