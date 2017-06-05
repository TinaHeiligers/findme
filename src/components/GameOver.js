/* eslint-disable */
// Not aware of redux
import React from 'react';

class GameOver extends React.Component{
  coverClassName() {
    if (!this.props.gameOver()) {
      return "cover hidden"
    } else {
      return "cover"
    }
  }
  playerClassName() {
    if (this.props.gameOver()) {
      return "gameover animated bounceInDown"
    } else {
      return "gameover animated hidden"
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
  restart() {
    this.props.restartGame()
  }
  render() {
    return(
      <div className={this.coverClassName()} onClick={this.restart.bind(this)}>
        <div className={this.playerClassName()}>{this.renderWinner()}</div>
      </div>
    )
  }
}
export default GameOver;
