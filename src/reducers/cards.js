
// reducers
const reducer = (state=null, action) => {
  switch (action.type) {
    case SELECT_CARD:
    return action.card

    case ALL_CARDS:
    return action.cards
  }
  return state
}

export default reducer
