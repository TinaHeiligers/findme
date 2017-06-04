import { SELECT_CARD, ALL_CARDS } from '../action-creators';
// reducers
const reducer = (state=[], action) => {
  switch (action.type) {
    case SELECT_CARD:
    return action.card

    case ALL_CARDS:
    return action.cards
  }
  return state
}

export default reducer
