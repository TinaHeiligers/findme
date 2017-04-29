import React from 'react';
import AddPlayerFormContainer from '../containers/AddPlayerFormContainer'


// eslint-disable-next-line
class StartPage extends React.Component {
  createPlayer(event) {
    event.preventDefault();
    if (this.props.players.length < 2) {
      const player = {
      name: this.name.value,
      matchedCards: []
      }
      this.props.addPlayer(player);
      this.playerForm.reset()
      }
    else {
      return null
    }
  }
  message(num) {
    if (num < 1) {
      return "Please add your name to start playing!"
    } else if (num < 2) {
      return "Add another player or press button to start"
    } else if (num === 2) {
      return "We're all set!"
    } else {
      return ""
    }
  }
  playerWelcome(player) {
    return this.props.gameStarted() ? player.matchedCards.length : `Welcome ${player.name}! `
  }
  render() {
    if (this.props.gameStarted()) {
      return null
    }
    return(
    <div className="startPageMainDiv">
      <h1>
        Find Me
      </h1>
      <h2>Find my matching partner in all the cards!</h2>
      <div>
          <p>{this.message(this.props.players.length)}</p>
          <form ref={(input) => this.playerForm = input} className="player-edit" onSubmit={(e) => this.createPlayer(e)}>
            <button className={this.props.players.length === 2 ? "hidden": "add-me-button"} type="Submit">Add Me</button>
            <input className={this.props.players.length === 2 ? "hidden": "visible"} ref={(input) => this.name = input} type="text" placeholder="Player Name"/>
          </form>
        </div>
        <div>{this.props.players.map((player) => this.playerWelcome(player))}</div>
      <div className="start-buttons">
        <button className="start-easy-game-button" name="easy" onClick={(e) => this.props.restartGame(e.target.name)}>EASY</button>
        <button className="start-medium-game-button" name="medium" onClick={(e) => this.props.restartGame(e.target.name)}>MEDIUM</button>
        <button className="start-hard-game-button" name="hard" onClick={(e) => this.props.restartGame(e.target.name)}>HARD</button>
      </div>
    </div>
    )
  }
}


export default StartPage;
