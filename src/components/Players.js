import React from 'react';

class Players extends React.Component {
  renderPlayer(player) {
    return(
      <li key={player.name} className="players">
        <span>{player.name}</span>
        <span> {player.matchedCards.length}</span>
      </li>
    )
  }

  render() {
    return(
      <div>
      <ul>
        {Object.values(this.props.players || []).map(player => this.renderPlayer(player))}
      </ul>
      </div>
      )
  }
}
export default Players;
