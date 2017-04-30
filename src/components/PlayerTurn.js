import React from 'react';

class PlayerTurn extends React.Component {
  playerClassName() {
    if (this.props.showNewPlayer) {
      return "turn animate zoomInUp"
    } else {
      return "turn animate hidden"
    }
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
      <div className={this.playerClassName()}>{this.currentPlayerPrompt()}</div>
    )
  }
}
export default PlayerTurn;
