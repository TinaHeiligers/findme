import React, { Component } from 'react';
import './css/App.css';
import { shuffle } from './helpers';
import sampleCards from './sample-cards';

import StartPage from './components/StartPage';
import Game from './components/Game';
import Players from './components/Players';
import PlayerTurn from './components/PlayerTurn'
import GameOver from './components/GameOver'
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
  }
  preGame = () => !this.gameStarted() && !this.gameOver();

  gameStarted = () => this.state.cards.length > 0;

  gameOver = () => {
    if(!this.gameStarted()) {
      return false;
    } else {
      const totalScores = this.scores().reduce((a, b) => a + b, 0);
      return totalScores === this.totalNumberOfCards();
    }
  }

  addPlayer = (player) => {
    const players = this.state.players;
    if (players.length < 2) {
        players.unshift(player)
        this.setState({ players })
      } else {
        return "Only up to two may play!"
      }
  }

  currentPlayer = () => this.state.players[this.state.currentPlayerIndex];

  resetPlayers = () => {
    const players = [...this.state.players];
    players.forEach(player => player.matchedCards = []);
    this.setState({
      players: players,
      currentPlayerIndex: 0
    });
  }

  players = () => this.state.players;

  totalNumberOfCards = () => this.state.cards.length;

  scores = () => this.state.players.map(player => player.matchedCards.length);

  totalScores = () => this.scores().reduce((a, b) => a + b, 0);

  gameWinner = () => {
    const maxScore = Math.max(...this.scores());
    return this.state.players
        .filter(player => player.matchedCards.length === maxScore)
        .map(player => player.name)
  }

  randomizeCards = (num) => {
    if(this.state.players.length === 0) {
      return;
    }
    const newCards = sampleCards.slice(0, num).concat(sampleCards.slice(0, num)).map(card => Object.assign({}, card));//making dups
    const shuffledCards = shuffle(newCards);
    shuffledCards.forEach(card => {
      card.selected = false;
      card.matched = false;
    });
    this.setState({
      cards: [...shuffledCards]
    });
  }

  resetSelectedCards = () => {
    let selectedCards = this.state.selectedCards.slice(0);
    const cards = [...this.state.cards];
    if (selectedCards.length === 2) {
      selectedCards = [];
      cards.forEach(card => card.selected = false);
      this.setState({
        cards: cards,
        selectedCards: selectedCards,
      });
    }
    return selectedCards;
  }

  selectCard = (card) => {
    const selectedCards = this.resetSelectedCards()
    card.selected = true;
    selectedCards.push(card);
    this.setState({
      selectedCards: selectedCards,
    });
  }

  selectedCardsCheck = () => {
    const cards = [...this.state.cards];
    const selectedCards = cards.filter(card => card.selected);
    if (selectedCards.length === 2) {
      if(selectedCards[0].name === selectedCards[1].name) {
        selectedCards[0].matched = selectedCards[1].matched = true;
        this.updateScore(selectedCards);
      } else {
        return;
      }
      this.switchTurns();
    }
  }

  switchTurns = () => {
    if(this.gameOver() || this.state.players.length < 2) {
      this.setState({
        currentPlayerIndex: (this.state.currentPlayerIndex + 1) % this.state.players.length,
        showNewPlayerState: 'hidden',
      });
    } else {
      this.setState({
        currentPlayerIndex: (this.state.currentPlayerIndex + 1) % this.state.players.length,
        showNewPlayerState: 'zoomInUp',
      });
      setTimeout(() => {
        this.setState({
          showNewPlayerState: 'explodeOut',
        })
        setTimeout(() => {
          this.setState({
            showNewPlayerState: 'hidden',
          })
        }, 1000)
      }, 1500)
    }
  }

  updateScore = (matchedCards) => {
    const currentPlayer = this.currentPlayer();
    currentPlayer.matchedCards.push(...matchedCards);
  }

  restartGame = (e) => {
    let num;
    if (!e) num = this.state.cards.length/2;
    else if (e === 'easy') { num = 6 }
    else if (e === 'medium') { num = 9 }
    else { num = 12 }
    this.randomizeCards(num);
    this.resetPlayers();
  }

  render() {
    return(
      <div>
          <StartPage
            players={this.state.players}
            restartGame={this.restartGame}
            addPlayer={this.addPlayer}
            gameStarted={this.gameStarted}
            preGame={this.preGame}
            />
          <CardsContainer
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
            showNewPlayer={this.state.showNewPlayer}
            addPlayer={this.addPlayer}
            gameStarted={this.gameStarted}
            currentPlayer={this.currentPlayer()}
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
            <GameOver
            gameWinner={this.gameWinner}
            gameOver={this.gameOver}
            restartGame={this.restartGame}
            />
      </div>
    );
  }
}
export default App;
