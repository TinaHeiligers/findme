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

// //reducer
//   randomizeCards(num){
//     //doubles each card and randomizes order
//     if(this.state.players.length === 0) {
//       return;
//     }
//     const newCards = sampleCards.slice(0, num).concat(sampleCards.slice(0, num)).map(card => Object.assign({}, card));//making dups
//     const shuffledCards = shuffle(newCards);
//     //Resetting selected prop to false on repressing the button
//     shuffledCards.forEach(card => {
//       card.selected = false;
//       card.matched = false;
//     });
//     this.setState({
//       cards: [...shuffledCards]
//     });
//   }

// //reducer
//   resetSelectedCards() {
//     let selectedCards = this.state.selectedCards.slice(0);
//     const cards = [...this.state.cards];
//     if (selectedCards.length === 2) {
//       selectedCards = [];
//       cards.forEach(card => card.selected = false);
//       this.setState({cards: cards, selectedCards: selectedCards});
//     }
//     return selectedCards;
//   }

// //reducer
//   selectCard(card) {
//     //resetting chosen cards array to add a new turn of card selection
//     const selectedCards = this.resetSelectedCards()
//     card.selected = true;
//     //overwriting the old card with the new one, don't remove this line of code, it's not a duplicate!
//     selectedCards.push(card);
//     this.setState({selectedCards: selectedCards});
//   }
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



