//reducer
  // addPlayer(player) {
  //   const players = this.state.players;
  //   if (players.length < 2) {
  //       players.unshift(player)
  //       this.setState({ players })
  //     } else {
  //     return "Only up to two may play!"
  //     }
  //   }
import { ADD_PLAYER } from '../action-creators';

const reducer = (state=[], action) => {
  switch (action.type) {
    case ADD_PLAYER:
    return action.player
  }
  return state
}

export default reducer
