/* eslint-disable */
import React, { Component } from 'react'
import './css/App.css'

//using react-redux
import { connect } from 'react-redux'

//selectors
import { preGame } from './selectors'

//containers
import WelcomeContainer from './containers/welcomeContainer'
import GameContainer from './containers/GameContainer'

import Game from './components/Game'
import Players from './components/Players'
import PlayerTurn from './components/PlayerTurn'
import GameOver from './components/GameOver'
import CardsContainer from './containers/CardsContainer'


const mapStateToProps = (state) => {
  return {
    // we only care about whether the game has started or not
    started: !preGame(state)
    }
}

class App extends Component {


  render() {
    return(
      <div>
      {this.props.started ? (<div>
                              <CardsContainer />
                              </div>) : <WelcomeContainer />}
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(App)

//   {this.props.started ? (<div>
                              // <CardsContainer />
                              // <Game />
                              // <Players />
                              // </div>) : <WelcomeContainer />}
//


