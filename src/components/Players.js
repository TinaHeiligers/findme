import React from 'react';

class Players extends React.Component {

  message(player) {
    return this.props.gameStarted() ? player.matchedCards.length : "Welcome!"
  }

  renderPlayer(player, index) {
    return(
      <li key={ player.name ? player.name : index } className="players">
        <span>{ player.name }</span>
        <span> { this.message(player) }</span>
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
          { (this.props.players || []).map((player, index) => this.renderPlayer(player, index)) }
        </ul>
        <div>
        <span className="cards-remaining">{ (this.props.cards.length - this.props.totalScores) }</span>
        </div>
      </div>
      )
  }
}
export default Players;
