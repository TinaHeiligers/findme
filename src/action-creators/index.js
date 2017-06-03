// actions
const SELECT_CARD = 'SELECT_CARD'
const ALL_CARDS = 'ALL_CARDS'

const RESTART_GAME = 'RESTART_GAME'

const ADD_PLAYER = 'ADD_PLAYER'

// action creators
export const restartGame = () => {
  return {
    type: RESTART_GAME
  }
}

export const addPlayer = (name) => {
  return {
    type: ADD_PLAYER,
    name
  }
}

export const selectCard = card => ({
  type: SELECT_CARD, card
})

export const allCards = cards => ({
  type: ALL_CARDS, cards
})
