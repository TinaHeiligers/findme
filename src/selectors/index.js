/* eslint-disable */
export function preGame(state) {
  return !gameStarted(state) && !gameOver(state)
}

export const currentPlayer = (state) => state.players[state.currentPlayerIndex]

export const totalNumberOfCards = (state) => state.cards.length

export const scores = (state) => state.players.map(player => player.matchedCards.length)

export const gameStarted = (state) => state.cards.length > 0

export const gameOver = (state) => {
  console.log('******IN GAMEOVER********', state)
  if(!gameStarted(state)) {
    return false;
  } else {
    const totalScores = scores(state).reduce((a, b) => a + b, 0);
    return totalScores === totalNumberOfCards(state);
  }
}

export const totalScores = (state) => scores(state).reduce((a, b) => a + b, 0)

export const gameWinner = (state) => {
  const maxScore = Math.max(...scores(state));
  //retrieve the player(s) names who have score
  return state.players
      .filter(player => player.matchedCards.length === maxScore)
      .map(player => player.name)
}

export function selectedCards(state) {
  return state.cards.filter(card => card.selected)
}

// this function needs to be refactored to a seperate selector and a seperate reducer
export function selectedCardsCheck(state) {
    const cards = [...this.state.cards]; // a copy of the cards

    const selectedCardsArray = selectedCards(cards);

    if (selectedCardsArray.length === 2) {
      if(selectedCardsArray[0].name === selectedCardsArray[1].name) {
        selectedCardsArray[0].matched = selectedCardsArray[1].matched = true; // a reducer function
        this.updateScore(selectedCardsArray); // an action creator that dispatches for a reducer to handle
      } else {
        // console.log("Try again!");
        return;
      }
      //switch turns
      this.switchTurns();
    }
  }
// This function belongs with selctedCardsCheck() now has to become a reducer for the players
  function switchTurns() {
    if(this.gameOver() || this.state.players.length < 2) {
      this.setState({
        currentPlayerIndex: (this.state.currentPlayerIndex + 1) % this.state.players.length,
        showNewPlayerState: 'hidden'
      });
    } else {
      this.setState({
        currentPlayerIndex: (this.state.currentPlayerIndex + 1) % this.state.players.length,
        showNewPlayerState: 'zoomInUp'
      });
      setTimeout(() => {
        this.setState({
          showNewPlayerState: 'explodeOut'
        })
        setTimeout(() => {
          this.setState({
            showNewPlayerState: 'hidden'
          })
        }, 1000)
      }, 1500)
    }
  }
