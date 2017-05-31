//aware of redux
//Dispatch Actions
import React from 'react';

//gets as props: players, an array
class PlayersContainer extends React.Component {

  render(){
    if (this.props.gameStarted()) {
      return null
      }
    return(
      <div>

      </div>
    )
  }
}
export default PlayersContainer;
