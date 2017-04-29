import React from 'react';
// import Card from './Card';

class CardsContainer extends React.Component {
  constructor() {
    super();
    this.renderCards = this.renderCards.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

//this handleClick event is in render cards
  handleClick(e, card) {
    e.preventDefault();;
    // e.currentTarget.style.backgroundColor = 'green';
    // e.currentTarget.style.backgroundImage = `url(${card.image})`;
    console.log(card.image);
    if(card.matched) {
      e.currentTarget.style.backgroundColor = 'red';
      console.log("already matched");
      return;
    }
    this.props.selectCard(card);
    this.props.selectedCardsCheck();
  }


  renderCards(card, idx) {
    let style = {}
    if(card.selected || card.matched) {
      style['backgroundImage'] = `url(${card.image})`;
    }
    if(card.matched) {
      style['opacity'] = 0.7;
    }
    return(
        <li className="cards-space" key={idx} name="selected" value={card.selected} onClick={(e)=> this.handleClick(e, card)} style={style}>
          <span
            name="selected"
            value={card.selected}>{card.selected || card.matched ? card.name : "Click me"}
          </span>
        </li>
      )
  }

  render() {
    if (!this.props.gameStarted()) {
      return null
    }
    return(
      <div className="top">
        <div className="game-over" value={this.props.gameOver()}>
            <div>{this.props.gameOver() ? "GAME OVER! " : ""}</div>
        </div>
        <ul className="cards-container wrap space-between">
        {this.props.cards.map(this.renderCards)}</ul>
        <br/>
      </div>
      )
  }
}

export default CardsContainer;
