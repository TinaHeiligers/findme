import React from 'react';

class AddPlayerFormContainer extends React.Component {

  createPlayer(event) {
    event.preventDefault();

    const player = {
      name: this.name.value,
      matchedCards: []
    }
    console.log(player);
    // this.props.addPlayer(player);
    this.playerForm.reset()
  }

  render() {
    if(!this.props.gameStarted) {
      return(
        <div>
          <form ref={(input) => this.playerForm = input} className="player-edit" onSubmit={(e) => this.createPlayer(e)}>
          <input ref={(input) => this.name = input} type="text" placeholder="Player Name"/>
          <button type="Submit">Add Me</button>
          </form>
        </div>
       )
    }
    return null;
  }
}

export default AddPlayerFormContainer;
