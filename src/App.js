import React, { Component } from 'react';
import './css/App.css';
import { shuffle } from './helpers';
import sampleCards from './sample-cards';

import StartPage from './components/StartPage';

import PlayersContainer from './containers/PlayersContainer';
import CardsContainer from './containers/CardsContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      selectedCards: [],
      players: [],
      currentPlayerIndex: 0
    };

    this.addPlayer = this.addPlayer.bind(this)
    this.restartGame = this.restartGame.bind(this)
    this.selectCard = this.selectCard.bind(this)
    this.gameStarted = this.gameStarted.bind(this)
    this.gameOver = this.gameOver.bind(this)
    this.selectedCardsCheck = this.selectedCardsCheck.bind(this)
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

  resetPlayers() {
    const players = [...this.state.players];
    players.forEach(player => player.matchedCards = []);
    this.setState({
      players: players,
      currentPlayerIndex: 0
       });
  }

  players() {
    return this.state.players;
  }

  totalNumberOfCards() {
    return this.state.cards.length;
  }

  scores() {
    return this.state.players.map(player => player.matchedCards.length);
  }

  //gameStarted toggles directly back to false after I click one card.
  gameStarted() {
    return this.state.cards.length > 0;
  }

  gameOver() {
    if(!this.gameStarted()) {
      console.log("IN GAME OVER, :", !this.gameStarted())
      return false;
    } else {
      const totalScores = this.scores().reduce((a, b) => a + b, 0);
      console.log("IN GAME OVER, else condition :", totalScores, this.totalNumberOfCards())
      return totalScores === this.totalNumberOfCards();
    }
  }

  gameWinner() {
    const maxScore = Math.max(...this.scores);
    //retrieve the player(s) names who have this score
    return this.players
        .filter(player => player.matchedCards.length === maxScore)
        .map(player => player.name)
  }

  randomizeCards(){
    if(Object.keys(this.state.players).length === 0) {
      console.log("You need a player");
      return;
    }
    const newCards = [];
    newCards.push(Object.keys(sampleCards).map(item => sampleCards[item]));
    const test = shuffle(newCards[0]);
    //Resetting selected prop to false on repressing the button
    test.forEach(card => {
      card.selected = false;
      card.matched = false;
    });
    var randomCards=[];
    for (var i=0; i<test.length; i++)
      randomCards[i] = test[i];
    this.setState({
      cards: [...randomCards]
    });
  }

  resetSelectedCards() {
    let selectedCards = this.state.selectedCards.slice(0);
    const cards = [...this.state.cards];
    if (selectedCards.length === 2) {
      selectedCards = [];
      cards.forEach(card => card.selected = false);
      this.setState({cards: cards, selectedCards: selectedCards});
    }
    return selectedCards;
  }

  selectCard(card) {
    //resetting chosen cards array to add a new turn of card selection
    const selectedCards = this.resetSelectedCards()
    card.selected = true;
    //overwriting the old card with the new one, don't remove this line of code, it's not a duplicate!
    selectedCards.push(card);
    this.setState({selectedCards: selectedCards});
  }

  selectedCardsCheck() {
    const cards = [...this.state.cards];
    const selectedCards = cards.filter(card => card.selected);
    if (selectedCards.length === 2) {
      if(selectedCards[0].name === selectedCards[1].name) {
        selectedCards[0].matched = selectedCards[1].matched = true;
        this.updateScore(selectedCards);
      } else {
        console.log("Try again!");
      }
      //switch turns
      this.switchTurns();
    }
  }

  switchTurns() {
    if(this.gameOver()) {
      console.log("GAME OVER!")
    } else {
        this.setState({
          currentPlayerIndex: (this.state.currentPlayerIndex + 1) % Object.keys(this.state.players).length
        });
      }
    }

  updateScore(matchedCards) {
    const currentPlayer = this.currentPlayer();
    currentPlayer.matchedCards.push(...matchedCards);
  }


  restartGame(e) {
    let num;
    if (e === 'easy') {num = 12}
    else if (e === 'medium') {num = 18}
    else {num = 24}
    // console.log(`RESTARTING GAME on ${e} levels with ${num} cards`);
    this.randomizeCards();
    this.resetPlayers();
  }


  render() {
    return(
      <div>
        <div>
          <CardsContainer
            className="cards-container"
            cards={this.state.cards}
            selectCard={this.selectCard}
            selectedCardsCheck={this.selectedCardsCheck}
            gameStarted={this.gameStarted}
            restartGame={this.restartGame}
            gameOver={this.gameOver}
            gameWinner={this.gameWinner}
          />
          <StartPage
            restartGame={this.restartGame}
            addPlayer={this.addPlayer}
            gameStarted={this.gameStarted}
            />
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
