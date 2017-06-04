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

// this function needs to be refactored to a seperate selector and a seperate reducer
  selectedCardsCheck() {
    const cards = [...this.state.cards];
    const selectedCards = cards.filter(card => card.selected);
    if (selectedCards.length === 2) {
      if(selectedCards[0].name === selectedCards[1].name) {
        selectedCards[0].matched = selectedCards[1].matched = true;
        this.updateScore(selectedCards);
      } else {
        // console.log("Try again!");
        return;
      }
      //switch turns
      this.switchTurns();
    }
  }
// This function belongs with selctedCardsCheck()
  switchTurns() {
    if(this.gameOver() || this.state.players.length < 2) {
      this.setState({
        currentPlayerIndex: (this.state.currentPlayerIndex + 1) % this.state.players.length,
        showNewPlayerState: 'hidden'
      });
    } else {
      this.setState({
        currentPlayerIndex: (this.state.currentPlayerIndex + 1) % this.state.players.length,
        showNewPlayerState: 'zoomInUp'
      });
      setTimeout(() => {
        this.setState({
          showNewPlayerState: 'explodeOut'
        })
        setTimeout(() => {
          this.setState({
            showNewPlayerState: 'hidden'
          })
        }, 1000)
      }, 1500)
    }
  }
  render() {
    return(
      <div>
      {this.props.started ? <GameContainer /> : <WelcomeContainer />}
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(App)

//   oldRender() {
//     return(
//       <div>
//         <StartPage
//         />
//         <CardsContainer
//           className="cards-container"
//           cards={this.state.cards}
//           selectCard={this.selectCard}
//           selectedCardsCheck={this.selectedCardsCheck}
//           gameStarted={this.gameStarted}
//           restartGame={this.restartGame}
//           gameOver={this.gameOver}
//           gameWinner={this.gameWinner}
//           preGame={this.preGame}
//         />
//         <Game
//           gameStarted={this.gameStarted}
//           restartGame={this.restartGame}
//           gameOver={this.gameOver}
//           players={this.state.players}
//         />
//         <Players
//           players={this.state.players}
//           addPlayer={this.addPlayer}
//           gameStarted={this.gameStarted}
//           currentPlayer={this.currentPlayer()}
//           showNewPlayer={this.state.showNewPlayer}
//           gameWinner={this.gameWinner}
//           gameOver={this.gameOver}
//           preGame={this.preGame}
//           totalScores={this.totalScores()}
//           cards={this.state.cards}
//         />
//         <PlayerTurn
//           showNewPlayerState={this.state.showNewPlayerState}
//           gameStarted={this.gameStarted}
//           currentPlayer={this.currentPlayer()}
//           gameOver={this.gameOver}
//         />
//         <GameOver
//           gameWinner={this.gameWinner}
//           gameOver={this.gameOver}
//           restartGame={this.restartGame}
//         />
//       </div>
//     );
//   }


