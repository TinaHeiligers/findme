/* eslint-disable */
// Not aware of redux

import React from 'react';

// eslint-disable-next-line
class StartPage extends React.Component {

  createPlayer(event) {
    event.preventDefault();
    this.props.onAddPlayer(this.name.value)
    this.playerForm.reset()
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
    return `Welcome ${player.name}! `
  }

  render() {
    return(
    <div className="startPageMainDiv">
      <h1>
        Find Me
      </h1>
      <h2>Find my matching partner in all the cards!</h2>
      <div>
        <p>{this.message(this.props.players.length)}</p>
        <form
          ref={(input) => this.playerForm = input}
          className={this.props.players.length === 2 ? "hidden": "player-edit"}
          onSubmit={(e) => this.createPlayer(e)}
        >
          <div className="name-input-container">
            <input
              className="name-input"
              ref={(input) => this.name = input}
              type="text" placeholder="Player Name"
            />
          </div>
          <div className="add-me-button-container">
            <button className="add-me-button" type="submit">Add Me</button>
          </div>
        </form>
      </div>
      <div className="player-welcome">{this.props.players.map((player) => this.playerWelcome(player))}</div>
      <div className="start-buttons">
        <button className="start-easy-game-button" onClick={() => this.props.onStartGame('easy')}>easy</button>
        <button className="start-medium-game-button" onClick={() => this.props.onStartGame('medium')}>medium</button>
        <button className="start-hard-game-button" onClick={() => this.props.onStartGame('hard')}>hard</button>
      </div>
    </div>
    )
  }
}


export default StartPage;
// {this.props.players.length === 2 ? "hidden": "add-me-button"}
