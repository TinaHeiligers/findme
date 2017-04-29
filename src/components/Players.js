import React from 'react';

class Players extends React.Component {

  message(player) {
    return this.props.gameStarted() ? player.matchedCards.length : "Welcome!"
  }

  renderPlayer(player) {
    return(
      <li key={player.name} className="players">
        <span>{player.name}</span>
        <span> {this.message(player)}</span>
      </li>
    )
  }
  currentPlayerPrompt() {
    if (!this.props.gameStarted()) {
      return null
    } else if(!this.props.gameOver()) {
        return (`${this.props.currentPlayer.name}, it's your turn.`)
    } else {
      return null;
    }
  }
  renderWinner() {
    if (!this.props.gameOver()) {
      return null;
    } else if (this.props.gameWinner().length > 1) {
      const gameWinnerNames = [...this.props.gameWinner()];
      const lastPerson = gameWinnerNames.pop();
      const otherNames = gameWinnerNames.join(', ');
      return `Congratulations ${otherNames} and ${lastPerson}!!!`;
    } else {
      return `Congratulations ${this.props.gameWinner()[0]}!!!`;
    }
  }

  render() {
    return(
      <div>
      <ul>
        {(this.props.players || []).map(player => this.renderPlayer(player))}
      </ul>
      <div className="winner">{this.currentPlayerPrompt()}</div>
      <div className="winner">{this.renderWinner()}</div>
      </div>
      )
  }
}
export default Players;
