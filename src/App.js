import React, { Component } from 'react';
import './css/App.css';
import { shuffle } from './helpers';
import sampleCards from './sample-cards';

import StartPage from './components/StartPage';
import Game from './components/Game';
import Players from './components/Players';
import PlayerTurn from './components/PlayerTurn'

import CardsContainer from './containers/CardsContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      selectedCards: [],
      players: [],
      currentPlayerIndex: 0,
      showNewPlayerState: 'hidden'
    };

    this.addPlayer = this.addPlayer.bind(this)
    this.restartGame = this.restartGame.bind(this)
    this.selectCard = this.selectCard.bind(this)
    this.gameStarted = this.gameStarted.bind(this)
    this.gameOver = this.gameOver.bind(this)
    this.gameWinner = this.gameWinner.bind(this)
    this.preGame = this.preGame.bind(this)
    this.selectedCardsCheck = this.selectedCardsCheck.bind(this)
    this.totalScores = this.totalScores.bind(this)

  }

  preGame() {
    return !this.gameStarted() && ! this.gameOver()
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
      return false;
    } else {
      const totalScores = this.scores().reduce((a, b) => a + b, 0);
      return totalScores === this.totalNumberOfCards();
    }
  }

  totalScores() {
    return this.scores().reduce((a, b) => a + b, 0)
  }

  gameWinner() {
    const maxScore = Math.max(...this.scores());
    //retrieve the player(s) names who have this score
    return this.state.players
        .filter(player => player.matchedCards.length === maxScore)
        .map(player => player.name)
  }

  randomizeCards(num){
    //doubles each card and randomizes order
    if(this.state.players.length === 0) {
      return;
    }
    const newCards = sampleCards.slice(0, num).concat(sampleCards.slice(0, num)).map(card => Object.assign({}, card));//making dups
    const shuffledCards = shuffle(newCards);
    //Resetting selected prop to false on repressing the button
    shuffledCards.forEach(card => {
      card.selected = false;
      card.matched = false;
    });
    this.setState({
      cards: [...shuffledCards]
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
  updateScore(matchedCards) {
    const currentPlayer = this.currentPlayer();
    currentPlayer.matchedCards.push(...matchedCards);
  }


  restartGame(e) {
    //sets number of unique cards to load
    let num;
    if (e === 'easy') {num = 6}
    else if (e === 'medium') {num = 9}
    else {num = 12}
    this.randomizeCards(num);
    this.resetPlayers();
  }


  render() {
    return(
      <div>
          <StartPage
            restartGame={this.restartGame}
            players={this.state.players}
            addPlayer={this.addPlayer}
            gameStarted={this.gameStarted}
            preGame={this.preGame}
            />
          <CardsContainer
            className="cards-container"
            cards={this.state.cards}
            selectCard={this.selectCard}
            selectedCardsCheck={this.selectedCardsCheck}
            gameStarted={this.gameStarted}
            restartGame={this.restartGame}
            gameOver={this.gameOver}
            gameWinner={this.gameWinner}
            preGame={this.preGame}
            />
          <Game
            gameStarted={this.gameStarted}
            restartGame={this.restartGame}
            gameOver={this.gameOver}
            players={this.state.players}
            />
          <Players
            players={this.state.players}
            addPlayer={this.addPlayer}
            gameStarted={this.gameStarted}
            currentPlayer={this.currentPlayer()}
            showNewPlayer={this.state.showNewPlayer}
            gameWinner={this.gameWinner}
            gameOver={this.gameOver}
            preGame={this.preGame}
            totalScores={this.totalScores()}
            cards={this.state.cards}
            />
            <PlayerTurn
            showNewPlayerState={this.state.showNewPlayerState}
            gameStarted={this.gameStarted}
            currentPlayer={this.currentPlayer()}
            gameOver={this.gameOver}
            />
      </div>
    );
  }
}

export default App;
