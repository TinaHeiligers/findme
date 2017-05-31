// Not aware of redux

import React from 'react';

class PlayerTurn extends React.Component {
  coverClassName() {
    if (this.props.showNewPlayerState === 'hidden') {
      return "cover hidden"
    } else {
      return "cover"
    }
  }
  playerClassName() {
    return `turn animated ${this.props.showNewPlayerState}`
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
  render() {
    return(
      <div className={this.coverClassName()}>
        <div className={this.playerClassName()}>{this.currentPlayerPrompt()}</div>
      </div>
    )
  }
}
export default PlayerTurn;
