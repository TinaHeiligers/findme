import React from 'react';
import { gameName, gameNumber } from '../helpers';
import Players from './Players';
// import './game.css';

class Game extends React.Component {
  constructor(){
    super()
  }

  buttonText() {
    return this.props.gameStarted() ? "New Game" : "Load Cards";
  }

  render() {
    if (!this.props.gameStarted()) {
      return null
    }
    return(
      <div>
        <h3 className="gamenumber">Howdi {gameName} Game!</h3>
        <p className="number">Game number: {gameNumber}</p>
        <button className="start-game-button"onClick={this.props.restartGame}>New Game</button>
      </div>
      )
  }
}

export default Game;
