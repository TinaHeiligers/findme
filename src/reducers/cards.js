/* eslint-disable */
import { SELECT_CARD, ALL_CARDS, RESTART_GAME, CHECK_SELECTED_CARDS } from '../action-creators';
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

function selectCard(cardID, cards) {
  let currentlySelectedCards = cards.filter(card => card.selected);
  if (currentlySelectedCards.length === 2) {
    cards = cards.map(card => {
      if(card.selected) {
        return Object.assign({}, card, { selected: false })
      } else {
        return card;
      }
    })
  }
  return cards.map((card, id) => {
    if (id === cardID) {
      return Object.assign({}, card, { selected: true })
    } else {
      return card;
    }
  })
}

function checkSelectedCards(cards) {
  let currentlySelectedCards = cards.filter(card => card.selected);
  if (currentlySelectedCards.length === 2) {
    if (currentlySelectedCards[0].name === currentlySelectedCards[1].name) {
      console.log('It\'s a match!')
      // now go update this player's score
    }
    // check that they are the same by name
    // if they are
  }
  console.log(currentlySelectedCards.length)
  return cards;
}

// reducers, at this stage, we only have an array of cards on the state.
// What I need is state that contains both an array of cards and an array of selected cards, i.e. cards for which card.selected = true
// I've decided to split the one reducer into two, one that handles the cards, the other that handles the selectedCards array.
const cardsReducer = (state=[], action) => {

  switch (action.type) {
    case RESTART_GAME:
    return randomizeCards(DIFFICULTIES[action.difficulty])

    case SELECT_CARD:
    return selectCard(action.cardID, state) // this should be fine since the reducer has all the cards on state from the store

    case CHECK_SELECTED_CARDS:
    return checkSelectedCards(state)

    case ALL_CARDS:
    return action.cards
  }
  return state
}

export default cardsReducer;
