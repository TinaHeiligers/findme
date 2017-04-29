import React from 'react';

class Players extends React.Component {

  message(player) {
    return this.props.gameStarted() ? player.matchedCards.length : "Welcome!"
  }

  renderPlayer(player) {
    return(
      <li key={player.name} className="players">
        <span>{player.name}</span>
        <span> {this.message(player)}</span>
      </li>
    )
  }

  render() {
    return(
      <div>
      <ul>
        {(this.props.players || []).map(player => this.renderPlayer(player))}
      </ul>
      </div>
      )
  }
}
export default Players;
