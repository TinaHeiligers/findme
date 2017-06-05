/* eslint-disable */
//aware of redux
//Dispatch Actions
import React from 'react';

class AddPlayerFormContainer extends React.Component {

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

  render() {
    if(!this.props.gameStarted) {
      return(
        <div className="player-heading">
          <p>{this.message(this.props.players.length)}</p>
          <form ref={(input) => this.playerForm = input} className="player-edit" onSubmit={(e) => this.createPlayer(e)}>
          <input className={this.props.players.length === 2 ? "hidden": "visible"} ref={(input) => this.name = input} type="text" placeholder="Player Name"/>
          <button className={this.props.players.length === 2 ? "hidden": "visible"} type="Submit">Add Me</button>
          </form>
        </div>
       )
    }
    return null;
  }
}

export default AddPlayerFormContainer;
//TODO: change input fields according to wireframe

