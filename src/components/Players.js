import React from 'react';

//gets as props players passed down from PlayersContainer
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
