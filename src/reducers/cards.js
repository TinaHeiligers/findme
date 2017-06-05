/* eslint-disable */
import { SELECT_CARD, ALL_CARDS, RESTART_GAME } from '../action-creators';
import sampleCards from '../sample-cards';
import { shuffle } from '../helpers'

const DIFFICULTIES = {
  easy: 12,
  medium: 18,
  hard: 24
}
 //reducer, this function's fine
function randomizeCards(num){
  //doubles each card and randomizes order
  const newCards = sampleCards.slice(0, num)
                              .concat(sampleCards.slice(0, num))
                              .map(card => Object.assign({}, card, {selected: false, matched: false}));
  const shuffledCards = shuffle(newCards);
  return shuffledCards;
}


// TODO: BREAK the following functions up into momoized functions and /or selectors.
// this is a function that must be refactored into a reducer! It does not have an action creator and so must be triggered by another reducer,
// at the moment it is called by selectCard, which does have an action creator.
function resetSelectedCards(cards) {
  let selectedCards = cards.filter(card => card.selected === true);
  return (selectedCards.length < 2) ? selectedCards : resetAllSelectedCards(cards)
}


// this is a function that must be refactored into a reducer!
//  all this function needs to do is change the .selected property of the card for which the id is cardId to true
function selectCard(cardId, cards) {
  let newCards = cards.slice(0);
  newCards[cardId].selected = true;
  return newCards;
}

// reducers, at this stage, we only have an array of cards on the state.
// What I need is state that contains both an array of cards and an array of selected cards, i.e. cards for which card.selected = true
// I've decided to split the one reducer into two, one that handles the cards, the other that handles the selectedCards array.
const cardsReducer = (state=[], action) => {

  switch (action.type) {
    case RESTART_GAME:
    return randomizeCards(DIFFICULTIES[action.difficulty])

    case SELECT_CARD:
    return selectCard(action.cardId, state) // this should be fine since the reducer has all the cards on state from the store

    case ALL_CARDS:
    return action.cards
  }
  return state
}
