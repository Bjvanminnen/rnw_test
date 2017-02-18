import { SELECT_CHARACTER } from './plaintext';

const CLEAR_HIGHLIGHT = 'highlightedCard/CLEAR_HIGHLIGHT';
export const clearHighlight = () => ({ type: CLEAR_HIGHLIGHT });

const initialState = '';
export default function highlightedCard(state = initialState, action) {
  if (action.type === SELECT_CHARACTER) {
    return action.char;
  }
  if (action.type === CLEAR_HIGHLIGHT) {
    return initialState;
  }
  return state;
}
