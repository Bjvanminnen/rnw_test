import { List } from 'immutable';

// TODO - rename to set character
const ADD_CHARACTER = 'plaintext/ADD_CHARACTER';
export const addCharacter = character => ({type: ADD_CHARACTER, character});

const CLEAR_STRING = 'plaintext/CLEAR_STRING';
export const clearString = () => ({ type: CLEAR_STRING });

export const SELECT_CHARACTER = 'plaintext/SELECT_CHARACTER';
export const selectCharacter = (index, char) => ({ type: SELECT_CHARACTER, index, char });

const initialState = {
  letters: List(' '),
  selectedIndex: 0
};

export default function plaintext(state = initialState, action) {
  if (action.type === ADD_CHARACTER) {
    const index = state.selectedIndex;
    let nextLetters = state.letters.set(index, action.character);
    if (index === state.letters.size - 1) {
      return {
        letters: nextLetters.push(' '),
        selectedIndex: index + 1
      };
    } else {
      return {
        ...state,
        letters: nextLetters
      };
    }
  }
  if (action.type === CLEAR_STRING) {
    return [];
  }

  if (action.type === SELECT_CHARACTER) {
    return {
      ...state,
      selectedIndex: action.index
    };
  }
  return state;
}
