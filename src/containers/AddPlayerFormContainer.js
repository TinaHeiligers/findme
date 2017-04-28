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
    if (num === 1) {
      return "Choose game or add a second player"
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
          <form ref={(input) => this.playerForm = input} className="player-edit" onSubmit={(e) => this.createPlayer(e)}>
          <input ref={(input) => this.name = input} type="text" placeholder="Player Name"/>
          <p>{this.message(this.props.players.length)}</p>
          <button type="Submit">Add Me</button>
          </form>
        </div>
       )
    }
    return null;
  }
}

export default AddPlayerFormContainer;
