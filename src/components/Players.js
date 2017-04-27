import React from 'react';

//gets as props players passed down from PlayersContainer
class Players extends React.Component {

  renderPlayer(players) {
    return(
      <li key={players.name} className="players">
        <span>{players.name}</span>
        <span>players number of matched cards length goes in here</span>
      </li>
    )
  }

  render() {
    return(
      <ul>
        Players COMPONENT: FIND PROPS BELOW
      </ul>
      )
  }
}
export default Players;
