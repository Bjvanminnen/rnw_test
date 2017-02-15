const ADD_CHARACTER = 'plaintext/ADD_CHARACTER';
export const addCharacter = character => ({type: ADD_CHARACTER, character});

const CLEAR_STRING = 'plaintext/CLEAR_STRING';
export const clearString = () => ({ type: CLEAR_STRING });

export default function plaintext(state = [], action) {
  if (action.type === ADD_CHARACTER) {
    return state.concat(action.character);
  }
  if (action.type === CLEAR_STRING) {
    return [];
  }
  return state;
}
