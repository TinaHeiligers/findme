export const RESTART_GAME = 'RESTART_GAME'
export const ADD_PLAYER = 'ADD_PLAYER'

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
