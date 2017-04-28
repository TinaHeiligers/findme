import React from 'react';
import AddPlayerFormContainer from '../containers/AddPlayerFormContainer';
import Players from '../components/Players'
//gets as props: players, an array
class PlayersContainer extends React.Component {

  render(){
    return(
      <div>
        <AddPlayerFormContainer addPlayer={this.props.addPlayer}/>
        <Players
          players={this.props.players} />
      </div>
    )
  }
}
export default PlayersContainer;
