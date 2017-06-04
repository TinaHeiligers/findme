import { SELECT_CARD, ALL_CARDS, RESTART_GAME } from '../action-creators';
import sampleCards from '../sample-cards';
import { shuffle } from '../helpers'

const DIFFICULTIES = {
  easy: 12,
  medium: 18,
  hard: 24
}
 //reducer
function randomizeCards(num){
  //doubles each card and randomizes order
  const newCards = sampleCards.slice(0, num)
                              .concat(sampleCards.slice(0, num))
                              .map(card => Object.assign({}, card, {selected: false, matched: false}));
  const shuffledCards = shuffle(newCards);
  return shuffledCards;
}

// reducers
const reducer = (state=[], action) => {

  switch (action.type) {
    case RESTART_GAME:
    return randomizeCards(DIFFICULTIES[action.difficulty])

    case SELECT_CARD:
    return action.card

    case ALL_CARDS:
    return action.cards
  }
  return state
}

export default reducer
