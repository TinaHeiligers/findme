/* eslint-disable */
import { combineReducers } from 'redux'
// import all reducers from seperate files
import cardsReducer from './cards'
import playersReducer from './players'

export default combineReducers({
  cards: cardsReducer,
  players: playersReducer
})
// //reducer
//   resetPlayers() {
//     const players = [...this.state.players];
//     players.forEach(player => player.matchedCards = []);
//     this.setState({
//       players: players,
//       currentPlayerIndex: 0
//        });
//   }

//

// //reducer


// //reducer

// //reducer
//   updateScore(matchedCards) {
//     const currentPlayer = this.currentPlayer();
//     currentPlayer.matchedCards.push(...matchedCards);
//   }

// //reducer
//   restartGame(e) {
//     //sets number of unique cards to load
//     let num;
//     if (!e) {
//       num = this.state.cards.length/2
//     }
//     else if (e === 'easy') {num = 6}
//     else if (e === 'medium') {num = 9}
//     else {num = 12}
//     this.randomizeCards(num);
//     this.resetPlayers();
//   }



