
export const preGame = (state) => !gameStarted(state) && ! gameOver(state)

export const currentPlayer = (state) => state.players[state.currentPlayerIndex]

export const totalNumberOfCards = (state) => state.cards.length

export const scores = (state) => state.players.map(player => player.matchedCards.length)

export const gameStarted = (state) => state.cards.length > 0

export const gameOver = (state) => {
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
