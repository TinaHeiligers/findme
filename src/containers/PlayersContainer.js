import React from 'react';

import Players from '../components/Players'
//gets as props: players, an array
class PlayersContainer extends React.Component {
  renderHeading() {
    console.log("HEADING IN PLAYERS CONTAINER")
  }

  render() {
    return(
      <div className="player-heading">
        {this.renderHeading()}
      Players Container
        <Players
          players={this.props.players} />
      </div>
    )
  }
}
export default PlayersContainer;
