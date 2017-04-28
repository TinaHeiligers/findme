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
      chosenCards: [],
      players: [],
      currentPlayerIndex: 0
    };

    this.addPlayer = this.addPlayer.bind(this)
    this.restartGame = this.restartGame.bind(this)
    this.selectCard = this.selectCard.bind(this);
    this.gameStarted = this.gameStarted.bind(this)
    this.chosenCardsCheck = this.chosenCardsCheck.bind(this);
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
    const players = {...this.state.players};
    Object.values(players).forEach(player => player.matchedCards = []);
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
    return this.players.map(player => player.matchedCards.length);
  }

  gameOver() {
    if(!this.gameStarted) {
      return false;
    } else {
      const totalScores = this.scores.reduce((a, b) => a + b, 0);
      return totalScores === this.totalNumberOfCards;
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

  selectCard(key, selectedCard) {
    let chosenCards = this.state.chosenCards.slice(0);
    const cards = {...this.state.cards};
    //resetting chosen cards array to add a new turn of card selection
    if (chosenCards.length === 2) {
      chosenCards = [];
      Object.values(cards).forEach(card => card.selected = false);
    }
    selectedCard = cards[key];
    selectedCard.selected = "true";
    //overwriting the old card with the new one, don't remove this line of code, it's not a duplicate!
    cards[key] = selectedCard;
    chosenCards.push(selectedCard);
    this.setState({cards: cards, chosenCards: chosenCards});
  }

  chosenCardsCheck() {
    const cards = {...this.state.cards};
    const chosenCards = Object.values(cards).filter(item => item.selected === "true");
    if (chosenCards.length === 2) {
      if(chosenCards[0].name === chosenCards[1].name) {
        chosenCards[0].matched = chosenCards[1].matched = true;
        this.updateScore(chosenCards);
      } else {
        console.log("Try again!");
      }
      //switch turns
      this.switchTurns();
    }
  }

  switchTurns() {
    if(this.gameOver) {
      console.log("Game over")
    } else {
        this.setState({
          currentPlayerIndex: (this.state.currentPlayerIndex + 1) % Object.keys(this.state.players).length
        });
      }
    }

  updateScore(matchedCards) {
    const currentPlayer = this.retrieveCurrentPlayer();
    currentPlayer.matchedCards.push(...matchedCards);
  }

  gameStarted() {
    return this.state.cards.length > 0;
  }

  restartGame(e) {
    let num;
    if (e === 'easy') {num = 12}
    else if (e === 'medium') {num = 18}
    else {num = 24}
    console.log(`RESTARTING GAME on ${e} levels with ${num} cards`);
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
            chosenCardsCheck={this.chosenCardsCheck}
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
