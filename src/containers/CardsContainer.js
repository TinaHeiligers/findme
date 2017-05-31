//aware of redux
//Dispatch Actions
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
    e.preventDefault();
    // console.log(card.image);
    if(card.matched) {
      // console.log("already matched");
      return;
    }
    this.props.selectCard(card);
    this.props.selectedCardsCheck();
  }
  cardClassName(card) {
    let array = ["card"];
    if (card.selected) {
      array.push("selected")
    } else if (card.matched) {
      array.push("matched")
    }
    return array.join(" ");
  }
  mainCardsContainerClassName() {
    let styleArr = ["top"]
    switch (this.props.cards.length){
      case 12:
        styleArr.push("easy")
        break;
      case 18:
        styleArr.push("medium")
        break;
      default:
        styleArr.push("hard")
        }
      return styleArr.join(" ")
  }

  renderCards(card, idx) {

    return(

      <div className="card-container" key={idx} name="selected" value={card.selected} onClick={(e) => this.handleClick(e, card)}>
        <div className={this.cardClassName(card)}>
          <div className="face front" style={{backgroundImage:`url(${card.image})`}}>
            <div className="name">{card.name}</div>
          </div>
          <div className="face back"></div>
        </div>
      </div>
      )
  }

  render() {
    if (!this.props.gameStarted()) {
      return null
    }
    return(
      <div className={this.mainCardsContainerClassName()}>
        <div className="game-over hidden" value={this.props.gameOver()}>
            <div>{this.props.gameOver() ? "GAME OVER! " : ""}</div>
        </div>
        {this.props.cards.map(this.renderCards)}
        <br/>
      </div>
      )
  }
}

export default CardsContainer;
