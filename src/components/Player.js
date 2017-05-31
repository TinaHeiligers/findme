// Not aware of redux

import React from 'react';

class Player extends React.Component {
  render() {
    return(
      <ul>
        <li key={player.name} className="players">
          <span>{player.name}</span>
          <span>Players matched card length goes here</span>
        </li>
      </ul>
    )
  }
}
export default Player;
