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
    this.restartGame = this.restartGame.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
  }

  addPlayer(player) {
    const players = player ? {...this.state.players} : {matchedCards: [], name: "FakeName"}
    // const players = {...this.state.players || {name: "Default"}}
    // const timestamp = Date.now()
    // players[`player-${timestamp}`] = player
    players[player] = player
    this.setState({ players })
  }

  restartGame(e) {
    let num;
    if (e === 'easy') {num = 12}
    else if (e === 'medium') {num = 18}
    else {num = 24}
    console.log(`RESTARTING GAME on ${e} levels with ${num} cards`);
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
                      addPlayer={this.addPlayer} />
        </div>
      </div>
    );
  }
}

export default App;
