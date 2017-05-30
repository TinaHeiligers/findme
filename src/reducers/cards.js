// actions
const SELECT_CARD = 'SELECT_CARD'
const ALL_CARDS = 'ALL_CARDS'

// action creators
export const selectCard = card => ({
  type: SELECT_CARD, card
})

export const allCards = cards => ({
  type: ALL_CARDS, cards
})

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

// what are these?
export const resetSelectedCards = () => ({
  dipatch =>
  // go fetch stuff from the db
  firebase.get('findMe', {card})
  //method dispatched once the cards matching the condition for the method in app have been retrieved from firebase.
  //get cards from db
  dispatch(allCards(response.data)) // ?

  dispatch(selectCard(response.data)) // ?
})

export default reducer
