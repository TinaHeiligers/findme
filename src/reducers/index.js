import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  cards: require('./cards').default,
  players: require('./players').default
})
export default rootReducer
