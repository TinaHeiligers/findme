import React from 'react';
import AddPlayerFormContainer from '../containers/AddPlayerFormContainer';
import Players from './Players';

class StartPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
    <div className="top">
      <h1>
        Find Me
      </h1>
      <h2>Find my matching partner in all the cards!</h2>

      <button className="start-easy-game-button" name="easy" onClick={(e) => this.props.restartGame(e.target.name)}>EASY</button>
      <button className="start-medium-game-button" name="medium" onClick={(e) => this.props.restartGame(e.target.name)}>MEDIUM</button>
      <button className="start-hard-game-button" name="hard" onClick={(e) => this.props.restartGame(e.target.name)}>HARD</button>
      <AddPlayerFormContainer addPlayer={this.props.addPlayer}/>
      <Players players={this.props.players}/>
    </div>
    )
  }
}


export default StartPage;
