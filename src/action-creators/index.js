// actions
export const SELECT_CARD = 'SELECT_CARD'
export const DESELECT_CARD = 'DESELECT_CARD'
export const MATCH_CARD = 'MATCH_CARD'
export const UNMATCH_CARD = 'UNMATCH_CARD'
export const ALL_CARDS = 'ALL_CARDS'
export const RESTART_GAME = 'RESTART_GAME'
export const ADD_PLAYER = 'ADD_PLAYER'

// we should pass as little data into an action creator as possible
// action creators
//
// action creators as dispatched with their arguments
// when restartGame is dispatched, the reducers that know how to handle actions
// of UNMATCH_CARD and DESELECT_CARD on all cards will
// it's dispatched within a cards.map function, ie
// the
export const restartGame = (difficulty) => {
  //handled by two reducers: cards, players
  return {
    type: RESTART_GAME,
    difficulty
  }
}
// adds a player: players becomes
// players = {
//    player = {
//      name: 'string',
//      matchedCards: []
//    },
//    player = {
  //    name: 'string',
  //    matchedCards: []
//    }
// }
export const addPlayer = (name) => {
  return {
    type: ADD_PLAYER,
    name
  }
}
// selectCard takes the card and changes it's selected property to true
// // i.e. card.selected = true
export const selectCard = cardID => ({
  type: SELECT_CARD,
  cardID
})
// deselectCard takes the card and changes it's selected property to false
// i.e. card.selected = false
export const deselectCard = cardID => ({
  type: DESELECT_CARD,
  cardID
})

export const matchCard = cardID => {
  type: MATCH_CARD,
  cardID
}

export const unmatchCard = cardID => {
  type: UNMATCH_CARD,
  cardID
}
//restartGame
export const allCards = cards => ({
  type: ALL_CARDS,
  cards
})
