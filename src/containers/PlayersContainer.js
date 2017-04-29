import React from 'react';
import AddPlayerFormContainer from '../containers/AddPlayerFormContainer';
import Players from '../components/Players'
//gets as props: players, an array
class PlayersContainer extends React.Component {

  render(){
    if (this.props.gameStarted()) {
      return null
      }
    return(
      <div>
        <AddPlayerFormContainer
          addPlayer={this.props.addPlayer}
          players={this.props.players}
          />
      </div>
    )
  }
}
export default PlayersContainer;
