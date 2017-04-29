import React from 'react';
import { gameName } from '../helpers';
// import './game.css';

class Game extends React.Component {
  render() {
    if (!this.props.gameStarted()) {
      return null
    }
    return(
      <div className="bottom-left">
        <h3 className="gamenumber">Howdi {gameName} Game!</h3>
        <p>Choose a New Game to Restart</p>
        <button className="start-easy-game-button" name="easy" onClick={(e) => this.props.restartGame(e.target.name)}>New Easy</button>
        <button className="start-medium-game-button" name="medium" onClick={(e) => this.props.restartGame(e.target.name)}>New Medium</button>
        <button className="start-hard-game-button" name="hard" onClick={(e) => this.props.restartGame(e.target.name)}>New Hard</button>
      </div>
      )
  }
}

export default Game;
