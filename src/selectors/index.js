
export const preGame = () => !this.gameStarted() && ! this.gameOver()

export const currentPlayer = () => this.state.players[this.state.currentPlayerIndex]

export const totalNumberOfCards = () => this.state.cards.length

export const scores = () => this.state.players.map(player => player.matchedCards.length)

export const gameStarted = () => this.state.cards.length > 0

export const gameOver = () => {
  if(!this.gameStarted()) {
    return false;
  } else {
    const totalScores = this.scores().reduce((a, b) => a + b, 0);
    return totalScores === this.totalNumberOfCards();
  }
}

export const totalScores = () => this.scores().reduce((a, b) => a + b, 0)

export const gameWinner = () => {
  const maxScore = Math.max(...this.scores());
  //retrieve the player(s) names who have this score
  return this.state.players
      .filter(player => player.matchedCards.length === maxScore)
      .map(player => player.name)
}
