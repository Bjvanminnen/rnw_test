const HIGHLIGHT_CARD = 'highlightedCard/HIGHLIGHT_CARD';
export const highlightCard = key => ({ type: HIGHLIGHT_CARD, key });

const CLEAR_HIGHLIGHT = 'highlightedCard/CLEAR_HIGHLIGHT';
export const clearHighlight = () => ({ type: CLEAR_HIGHLIGHT });

const initialState = '';
export default function highlightedCard(state = initialState, action) {
  if (action.type === HIGHLIGHT_CARD) {
    return action.key;
  }
  if (action.type === CLEAR_HIGHLIGHT) {
    return initialState;
  }
  return state;
}
