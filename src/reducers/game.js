const reducer = (state=null, action) => {
  switch (action.type) {
    case GAME_STARTED:
    return action.game
  }
  return state
}

export default reducer
