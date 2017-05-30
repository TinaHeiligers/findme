{
  game: <PREGAME, READY, FIRST_CARD, SECOND_CARD, GAME_OVER>
  cards: [...{ url, state<NONE, SELECTED, MATCHED> }],
  players: [...{ name, turn, matchedCards: [] }]
}

ADD_PLAYER(name) players
RESET_PLAYERS() players
START_GAME(difficulty) cards
SELECT_CARD(index) cards
MATCH_CARDS(index, index) players, cards
CHANGE_TURN() players
WIN_GAME([index]) game

{
  cards: [...url],
  players: [...name],
  turn: index,
  scores: [...score],
  selected: [...cardIndex],
  matched: [...cardIndex]
}


function cardsReducer(state, action) {
  switch(action.type) {
    case MATCH_CARDS:
      return Object.assign({}, state, /*somehow change the matched cards*/)
    default:
      return state
  }
}

function playersReducer(state, action) {
  switch(action.type) {
    case MATCH_CARDS:
      return Object.assign({}, state, /*somehow change the matched cards*/)
    default:
      return state
  }
}

combineReducers(playersReducer, cardsReducer)
