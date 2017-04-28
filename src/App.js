import React, { Component } from 'react';
import './css/App.css';
import StartPage from './components/StartPage';
import PlayersContainer from './containers/PlayersContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      chosenCards: [],
      players: [],
      currentPlayerIndex: 0
    };
    this.restartGame = this.restartGame.bind(this)
    this.gameStarted = this.gameStarted.bind(this)
    this.addPlayer = this.addPlayer.bind(this)
    this.gameStarted = this.gameStarted.bind(this)
  }

  addPlayer(player) {
    const players = this.state.players;
    if (players.length < 2) {
        players.unshift(player)
        this.setState({ players })
      } else {
      return "Only up to two may play!"
      }
    }

  currentPlayer() {
    return this.state.players[this.state.currentPlayerIndex];
  }

  scores() {
    return this.players.map(player => player.matchedCards.length);
  }

  gameStarted() {
    return this.state.cards.length > 0;
  }

  gameOver() {
    if(!this.gameStarted) {
      return false;
    } else {
      const totalScores = this.scores.reduce((a, b) => a + b, 0);
      return totalScores === this.totalNumberOfCards;
    }
  }

  restartGame(e) {
    let num;
    if (e === 'easy') {num = 12}
    else if (e === 'medium') {num = 18}
    else {num = 24}
    // console.log(`RESTARTING GAME on ${e} levels with ${num} cards`);
    // this.randomizeCards();
    // this.resetPlayers();
  }


  render() {
    return(
      <div>
        <div>
          <StartPage
            restartGame={this.restartGame}
            addPlayer={this.addPlayer}/>
          <PlayersContainer
            players={this.state.players}
            addPlayer={this.addPlayer}
            gameStarted={this.state.gameStarted}
            currentPlayer={this.currentPlayer()}
            />
        </div>
      </div>
    );
  }
}

export default App;
