import React, { Component } from 'react';
import './css/App.css';
import StartPage from './components/StartPage';

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
  }
  restartGame(e) {
    let num;
    if (e === 'easy') {
      num = 12
    }
    else if (e === 'medium') {
      num = 18
    }
    else {
      num = 24
    }
    console.log('RESTARTING GAME CLICK HANDLER: ', e);
    console.log(`restarting Game on ${e} levels with ${num} cards`);
    // this.randomizeCards();
    // this.resetPlayers();
  }
  render() {
    return(
      <div>
        <div>
          <StartPage restartGame={this.restartGame}/>
        </div>
      </div>
    );
  }
}

export default App;
