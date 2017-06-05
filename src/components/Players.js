/* eslint-disable */
// Not aware of redux

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
    if (!this.props.gameStarted()) {
      return null;
    }
    return(
      <div className="bottom bottom-right">
        <ul>
          {(this.props.players || []).map(player => this.renderPlayer(player))}
        </ul>

        <div>
        <span className="cards-remaining">{(this.props.cards.length - this.props.totalScores)}</span>
        </div>
      </div>
      )
  }
}
export default Players;
