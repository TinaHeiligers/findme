/* eslint-disable */
import { ADD_PLAYER, RESTART_GAME } from '../action-creators';

const reducer = (state=[], action) => {

  switch (action.type) {
    case RESTART_GAME:
      return state.map((player, idx) => {
        return {
          name: player.name,
          matchedCards: [],
          turn: idx === 0
        }
      })

    case ADD_PLAYER:
      let newState = [...state];
      return newState.concat({
        name: action.name,
        matchedCards: [],
        turn: false
      })
  }
  return state
}

export default reducer
