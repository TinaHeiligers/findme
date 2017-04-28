import React from 'react';
// import Card from './Card';

class CardsContainer extends React.Component {
  constructor() {
    super();
    this.renderCards = this.renderCards.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

//this handleClick event is in render cards
  handleClick(e, key) {
    e.preventDefault();
    const card = this.props.cards[key];
    // e.currentTarget.style.backgroundColor = 'green';
    // e.currentTarget.style.backgroundImage = `url(${card.image})`;
    console.log(card.image);

    if(card.matched) {
      e.currentTarget.style.backgroundColor = 'red';
      console.log("already matched");
      return;
    }
    const selectedCard = Object.assign({}, card);
    this.props.selectCard(key, selectedCard);
    this.props.chosenCardsCheck();
  }


  renderCards(key) {
    const card = this.props.cards[key];
    let style = {}
    if(card.selected || card.matched) {
      style['backgroundImage'] = `url(${card.image})`;
    }
    if(card.matched) {
      style['opacity'] = 0.7;
    }
    return(
        <li className="cards-space" key={key} name="selected" value={card.selected} onClick={(e)=> this.handleClick(e, key)} style={style}>

          <span
            name="selected"
            value={card.selected}>{card.selected || card.matched ? card.name : "Click me"}
          </span>

        </li>
      )
  }
  get buttonText() {
    return this.props.gameStarted ? "New Game" : "Load Cards";
  }

  renderWinner() {
    if(!this.props.gameOver) {
      return null;
    } else if(this.props.gameWinner.length > 1) {
      const gameWinnerNames = [...this.props.gameWinner];
      const lastPerson = gameWinnerNames.pop();
      const otherNames = gameWinnerNames.join(', ');
      return `Congratulations ${otherNames} and ${lastPerson}`;
    } else {
      return `Congratulations ${this.props.gameWinner[0]}`;
    }
  }

  render() {
    return(
      <div>
        <button className="start-game-button"onClick={this.props.restartGame}>{this.buttonText}</button>

        <ul className="cards-container wrap space-between">
        {Object.keys(this.props.cards).map(this.renderCards)}</ul>
        <br/>
        <div className="game-over" value={this.props.gameOver}>
          <div>{this.props.gameOver ? "GAME OVER! " : ""}</div>
          <div className="winner">{this.renderWinner()}</div>
        </div>
      </div>
      )
  }
}

export default CardsContainer;
