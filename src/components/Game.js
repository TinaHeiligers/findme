/* eslint-disable */
// Not aware of redux
import React from 'react';
import { gameName } from '../helpers';
// import './game.css';

class Game extends React.Component {
  render() {
    if (!this.props.gameStarted()) {
      return null
    }
    return(
      <div className="bottom bottom-left">
        <h3 className="gamenumber">{gameName}!</h3>
        <p className="game-restart">Play again?</p>
        <div className="buttons-restart">
          <button className="button-restart-easy" name="easy" onClick={(e) => this.props.restartGame(e.target.name)}>easy</button>
          <button className="button-restart-medium" name="medium" onClick={(e) => this.props.restartGame(e.target.name)}>medium</button>
          <button className="button-restart-hard" name="hard" onClick={(e) => this.props.restartGame(e.target.name)}>hard</button>
        </div>
      </div>
      )
  }
}

export default Game;
